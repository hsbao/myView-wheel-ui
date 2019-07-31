<template>
  <div class="tabs-item" @click="handleClickItem" :class="classes">
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
  methods: {
    handleClickItem() {
      this.eventBus.$emit('update:selected', this.name, this)
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
  $active-color: #409eff;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active {
      font-weight: bold;
      color: $active-color;
    }
  }
</style>
