import Vue from 'vue'
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/Button-Group.vue'
import Input from './components/Input.vue'

Vue.component('view-button', Button)
Vue.component('view-icon', Icon)
Vue.component('view-button-group', ButtonGroup)
Vue.component('view-input', Input)

new Vue({
  el: '#app',
  data: {
    loading: false
  }
})
