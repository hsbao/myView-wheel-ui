import Vue from 'vue'
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/Button-Group.vue'

Vue.component('mview-button', Button)
Vue.component('mview-icon', Icon)
Vue.component('mview-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading: false
  }
})


//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove() //测试结束删除button，并卸载button组件
  vm.$destroy()
}

{
  //在loading参数为true时，icon应该显示loading
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove() //测试结束删除button，并卸载button组件
  vm.$destroy()
}

{
  //在默认情况下，icon应该在左边，也就是svg的order为1
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove() //测试结束删除button，并卸载button组件
  vm.$destroy()
}

{
  //在iconPosition为right时，svg的order为2
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove() //测试结束删除button，并卸载button组件
  vm.$destroy()
}

{
  /**
  * 使用chai-spies模拟click事件 
  */
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let spy = chai.spy(function() {})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called() //表示click执行
}