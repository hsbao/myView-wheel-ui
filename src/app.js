import Vue from 'vue'
import Button from './components/buttons/Button.vue'
import Icon from './components/basic/Icon.vue'
import ButtonGroup from './components/buttons/Button-Group.vue'
import Input from './components/form/Input.vue'
import Layout from './components/layout/Layout.vue'
import Header from './components/layout/Header.vue'
import Sider from './components/layout/Sider.vue'
import Content from './components/layout/Content.vue'
import Footer from './components/layout/Footer.vue'
import Row from './components/grid/Row.vue'
import Col from './components/grid/Col.vue'

import Tabs from './components/tabs/Tabs.vue'
import TabsHead from './components/tabs/Tabs-head.vue'
import TabsItem from './components/tabs/Tabs-item.vue'
import TabsBody from './components/tabs/Tabs-body.vue'
import TabsPane from './components/tabs/Tabs-pane.vue'

import Popover from './components/other/Popover.vue'

import Collapse from './components/other/collapse/Collapse.vue'
import CollapseItem from './components/other/collapse/Collapse-item.vue'

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

Vue.component('view-tabs', Tabs)
Vue.component('view-tabs-head', TabsHead)
Vue.component('view-tabs-item', TabsItem)
Vue.component('view-tabs-body', TabsBody)
Vue.component('view-tabs-pane', TabsPane)

Vue.component('view-popover', Popover)

Vue.component('view-collapse', Collapse)
Vue.component('view-collapse-item', CollapseItem)

Vue.use(ToastPlugin)


new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hi',
    selected: 'belle',
    selectedTab: ['2']
  },
  methods: {
    yyy() {
      console.log('yyy')
    },
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
