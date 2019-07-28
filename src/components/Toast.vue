<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
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
      default: 4
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        callback: undefined
      })
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
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: $font-size;
  color: white;
  height: $toast-height;
  line-height: 1.8;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0 16px;
  
  > .close {
    padding-left: 16px;
  }

  > .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
