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