<template>
  <div class="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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

  }
}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
  }
</style>
