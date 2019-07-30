<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewTabsPane',
  inject: [
    'eventBus'
  ],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      background: red;
      color: white;
    }
  }
</style>
