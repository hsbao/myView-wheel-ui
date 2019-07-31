const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../src/components/tabs/Tabs-item.vue'

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.ok
  })

  it('tabs-items 可以接收name属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('test')
  })

  it('tabs-items 可以接收disabled属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test',
        disabled: true
      },
      injection: {
        eventBus: new Vue()
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.eq(true)
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
  
})
