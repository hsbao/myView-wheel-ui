<template>
  <button 
    class="view-button" 
    :class="{[`icon-${iconPosition}`]: true}"
    @click="handleButtonClick"
  >
    <mview-icon class="icon" v-if="icon && !loading" :name="icon"></mview-icon>
    <mview-icon class="icon loading" v-if="loading" name="loading"></mview-icon>
    <div class="btn-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../basic/Icon'
export default {
  name: 'ViewButton',
  props: {
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) { //属性检查器
        return !(value !== 'left' && value !== 'right')
      }

    }
  },
  components: {
    'mview-icon': Icon
  },
  methods: {
    handleButtonClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.view-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  outline: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  vertical-align: top;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active { 
    background: var(--button-active-bg);
  }

  &:focus { outline: none; }

  &.icon-left {
    > .btn-text { order: 2; }
    > .icon { order: 1; margin-right: .3em; }
  }

  &.icon-right {
    > .btn-text { order: 1; }
    > .icon { order: 2; margin-left: .3em; margin-right: 0; }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
