<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ViewTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'crosswise',
      validator(value) {
        return ['crosswise', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    /*
    * 通过依赖provide/注入inject，传递一个事件总线eventBus
    * 底下的任意子组件可以通过inject获取到eventBus
    */
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      throw new Error('view-tabs的子组件应该是view-tabs-head和view-tabs-body，你当前没有写改子组件')
    }

    //获取当前选中的item
    this.$children.forEach(vm => {
      if (vm.$options.name === 'ViewTabsHead') {
        vm.$children.forEach(child => {     
          if (child.$options.name === 'ViewTabsItem' && child.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, child)
          }
        })
      }
    })
    
  }
}
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>
