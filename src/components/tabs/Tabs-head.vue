<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewTabsHead',
  inject: [
    'eventBus'
  ],
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      console.log(name)
      const { width, left } = vm.$el.getBoundingClientRect()
      console.log(width, left)
      this.$refs['line'].style.width = `${width}px`
      //this.$refs['line'].style.left = `${left}px`
      this.$refs['line'].style.transform = `translate(${left}px)`
    })
  }
}
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  $active-color: #409eff;
  .tabs-head {
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $active-color;
      transition: all .35s;
    }

    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
