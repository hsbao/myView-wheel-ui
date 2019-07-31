<template>
  <div 
    class="tabs-item" 
    :data-name="name"
    :class="classes"
    @click="handleClickItem"
  >
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
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    handleClickItem() {
      if (this.disabled) return
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  mounted() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
    this.$emit('click', this)
  }
}
</script>

<style lang="scss" scoped>
  $active-color: #409eff;
  $disabled-text-color: rgba(0,0,0,0.25);
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

    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed; 
    }
  }
</style>
