<template>
  <button class="view-button" :class="{[`icon-${iconPosition}`]: true}">
    <mview-icon class="icon" v-if="icon" :name="icon"></mview-icon>
    <div class="btn-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'View-Button',
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) { //属性检查器
        return !(value !== 'left' && value !== 'right')
      }

    }
  }
}
</script>

<style lang="scss">
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
}
</style>
