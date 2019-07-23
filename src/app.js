import Vue from 'vue'
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'

Vue.component('mview-button', Button)
Vue.component('mview-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading: false
  }
})