import Toast from '../components/other/Toast.vue'

/*
  把toast写成插件的形式的原因是：
    1. 避免在Toast直接引入Vue: import Vue from 'vue'
    2. 避免直接在Vue.prototype上直接定义$toast,写成插件，是让用户自己选择是否要使用

  Vue.js 的插件应该暴露一个 install 方法。
    这个方法的第一个参数是 Vue 构造器，
    第二个参数是一个可选的选项对象：
*/ 

let currentToast //当前toast实例

export default {
  install(Vue, options) {
    //把$toast定义在Vue.prototype上，用户直接通过this.$toast调用
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        //如果已经存在一个toast，先调用taost的close()删除
        currentToast.close()
      }
      currentToast = createToast({ 
        Vue, 
        message, 
        propsData: toastOptions,
        onBeforClose: () => {
          //监听上一个发送的beforClose事件，防止taost的close()多次被调用
          currentToast = null
        }
      })
    } 
  }
}


const createToast = ({ Vue, message, propsData, onBeforClose }) => {
  //使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
  const Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('beforClose', onBeforClose)
  document.body.appendChild(toast.$el)
  
  return toast
}