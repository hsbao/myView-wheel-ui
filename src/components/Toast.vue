<template>
  <div class="toast" ref="wrapper" :class="toastClassByPosition">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" @click="onCloseToast">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'ViewToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 100
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
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs['line'].style.height = `${this.$refs['wrapper'].getBoundingClientRect().height}px`
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
.toast {
  position: fixed;
  left: 50%;
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

  &.position-top {
    top: 0px;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0px;
    transform: translateX(-50%);
  }
}
</style>
