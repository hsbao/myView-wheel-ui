import Vue from 'vue'
import Input from '../src/components/Input.vue'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('input组件存在', () => {
    expect(Input).to.be.ok
  })

  //props
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('Input组件可以接收 value', () => {      
      vm = new Constructor({
        propsData: {
          value: 'test value'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('test value')
    })
  
    it('input组件可以接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
  
    it('input组件可以接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
  
    it('input组件可以接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error message'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const messageError = vm.$el.querySelector('.message-error')
      expect(messageError.innerText).to.equal('error message')
    })

    //event
    describe('event', () => {
      const Constructor = Vue.extend(Input)
      let vm
      afterEach(() => {
        vm.$destroy()
      })
      it('测试 change input focus blur事件', () => {
        const eventArray = ['change', 'input', 'focus', 'blur']
        eventArray.forEach(eventName => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake()
          vm.$on(eventName, callback)

          //触发事件
          let event = new Event(eventName)
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.calledWith(event)
        })
      })
    })
  })


})