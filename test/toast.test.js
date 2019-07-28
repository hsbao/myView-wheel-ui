import Vue from 'vue'
import Toast from '../src/components/Toast.vue'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('toast组件存在', () => {
    expect(Toast).to.be.ok
  })

  //props
  describe('props', (done) => {
    const Constructor = Vue.extend(Toast)

    it('接收 autoClose', () => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)

      setTimeout(() => {
        console.log(vm.$el)
        expect(document.body.contains(vm.$el)).to.equal(false)
        done()
      }, 1500)

    })

    it('接收 closeButton', () => {
      let callback = sinon.fake()
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'close',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('close')
      closeButton.click()
      expect(callback).to.have.be.called
    })

    it('接收 enableHtml', () => {
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<p id="test">hi</p>']
      vm.$mount()
      let p = vm.$el.querySelector('#test')
      expect(p).to.exist
    })

    it('接收 position', () => {
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.equal(true)
    })
   
  })


})