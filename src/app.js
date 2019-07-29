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
import Row from './components/Row.vue'
import Col from './components/Col.vue'

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
Vue.component('view-row', Row)
Vue.component('view-col', Col)

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
    showToast(position) {
      this.$toast(`这是toast。${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: 'close',
          callback: () => {
            console.log('close toast callback')
          }
        },
        autoClose: 4,
        position
      })
    }
  },
  created() {
    
  }
})
