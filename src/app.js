import Vue from 'vue'
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/Button-Group.vue'
import Input from './components/Input.vue'
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Sider from './components/Sider.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

import ToastPlugin from './plugins/toast-plugin'

Vue.component('view-button', Button)
Vue.component('view-icon', Icon)
Vue.component('view-button-group', ButtonGroup)
Vue.component('view-input', Input)
Vue.component('view-layout', Layout)
Vue.component('view-header', Header)
Vue.component('view-sider', Sider)
Vue.component('view-content', Content)
Vue.component('view-footer', Footer)

Vue.use(ToastPlugin)


new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hi'
  },
  methods: {
    inputChange(val) {
      console.log(val)
    },
    showToast() {
      this.$toast('i am toast')
    }
  },
  created() {
    this.$toast('这是toast', {
      closeButton: {
        text: 'close',
        callback: () => {
          console.log('close toast callback')
        }
      },
      autoClose: false,
      autoCloseDelay: 4,
      position: 'top'
    })
  }
})
