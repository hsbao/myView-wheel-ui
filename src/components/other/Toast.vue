<template>
  <div class="wrapper" :class="toastClassByPosition">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>

      <div class="line" ref="line"></div>
      <span class="close" @click="onCloseToast">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator: (value) => {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        callback: undefined
      })
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClassByPosition() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('beforClose') //在删除toast组件前，发送一个beforClose事件
      this.$destroy()
    },
    onCloseToast() {
      this.close()
      if (this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs['line'].style.height = `${this.$refs['toast'].getBoundingClientRect().height}px`
      })
    }
  },
  mounted() {
    this.updateStyle()
    this.execAutoClose()
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: .5s;

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0px;
    .toast {
      animation: sider-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0px;
    .toast {
      animation: sider-up $animation-duration;
    }  
  }
}


.toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  color: white;
  min-height: $toast-min-height;
  line-height: 1.8;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0 16px;
  
  > .message {
    padding: 8px 0;
  }

  > .close {
    padding-left: 16px;
    flex-shrink: 0;
  }

  > .line {
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}

@keyframes sider-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%)
  }
}

@keyframes sider-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes sider-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
