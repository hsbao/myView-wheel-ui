const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/components/tabs/Tabs'
import TabsHead from '../src/components/tabs/Tabs-head.vue'
import TabsItem from '../src/components/tabs/Tabs-item.vue'
import TabsBody from '../src/components/tabs/Tabs-body.vue'
import TabsPane from '../src/components/tabs/Tabs-pane.vue'

Vue.component('view-tabs', Tabs)
Vue.component('view-tabs-head', TabsHead)
Vue.component('view-tabs-item', TabsItem)
Vue.component('view-tabs-body', TabsBody)
Vue.component('view-tabs-pane', TabsPane)

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('tabs 可以接收selected属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <view-tabs selected="sports">
        <view-tabs-head>
          <view-tabs-item name="sports">体育</view-tabs-item>
          <view-tabs-item name="belle">财经</view-tabs-item>
          <view-tabs-item name="test">test</view-tabs-item>
        </view-tabs-head>

        <view-tabs-body>
          <view-tabs-pane name="sports">体育相关资讯</view-tabs-pane>
          <view-tabs-pane name="belle">美女相关资讯</view-tabs-pane>
          <view-tabs-pane name="test">test</view-tabs-pane>
        </view-tabs-body>

      </view-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let activeItem = vm.$el.querySelector(`.tabs-item[data-name="sports"]`)
      expect(activeItem.classList.contains('active')).to.equal(true)
      done()
    })
  })


  it('tabs 可以接收direction属性', () => {
    
  })
  
})
