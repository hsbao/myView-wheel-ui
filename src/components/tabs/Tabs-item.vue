<template>
  <div class="tabs-item" @click="handleClickItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: [
    'eventBus'
  ],
  methods: {
    handleClickItem() {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-item {
    
  }
</style>
