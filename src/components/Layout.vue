<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      //判断layout下有没有sider组件，如果有则改变布局
      if (vm.$options.name === 'ViewSlider') {
        this.$set(this.layoutClass, 'hasSider', true)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &.hasSider {
    flex-direction: row;
  }
}
</style>
