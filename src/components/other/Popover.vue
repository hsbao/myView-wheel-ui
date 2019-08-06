<template>
  <div class="popover" ref="popover" @click="onClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ViewPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.screenX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
  }
  .content-wrapper {
    position: absolute;
    transform: translateY(-100%)
  }
</style>
