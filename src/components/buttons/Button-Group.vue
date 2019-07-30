<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewButtonGroup',
  mounted() {
    const child = this.$el.children
    Array.from(child).forEach(node => {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`view-button-group 的子元素应该全是view-button, 但是你写了 ${name}`)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .button-group {
    display: inline-flex;
    vertical-align: top;
    > .view-button {
      border-radius: 0;
      margin-left: -1px;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
