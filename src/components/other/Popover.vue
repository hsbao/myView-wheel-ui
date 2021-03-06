<template>
  <div class="popover" ref="popover">
    <div 
      class="content-wrapper" 
      ref="contentWrapper" 
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ViewPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, left, top } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()

      let positions = {
        top: {
          left: left + window.screenX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.screenX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.screenX,
          top: top  + window.scrollY + (height - height2) / 2
        },
        right: {
          left: left + width + window.screenX,
          top: top + window.scrollY + (height - height2) / 2
        }
      }

      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
        return
      }

      if (this.$refs.contentWrapper && (this.$refs.contentWrapper.contains(e.target) || this.$refs.contentWrapper === e.target)) {
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
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  }
}
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, .5));
    background: #fff; 
    padding: .5em 1em;
    max-width: 15em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute; 
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -11px;

      &::before {
        border-top-color: $border-color;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }

    &.position-bottom {
      margin-top: 11px;

      &::before {
        border-bottom-color: $border-color;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -11px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%)
      }

      &::before {
        border-left-color: $border-color;
        left: 100%;
      }

      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }

    &.position-right {
      margin-left: 11px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%)
      }

      &::before {
        border-right-color: $border-color;
        right: 100%;
      }

      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }

    
  }
</style>
