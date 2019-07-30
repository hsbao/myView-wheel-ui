<template>
  <div class="wrapper" :class={error}>

    <!-- 现在是在触发input对应的事件的时候，是直接把input的value传出去，后续需要调整 -->
    <input 
      type="text" 
      :value="value" 
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="message-error">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from '../basic/Icon'
export default {
  name: 'ViewInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
  // --button-height: 32px;
  // --font-size: 14px;
  // --button-bg: #fff;
  // --button-active-bg: #eee;
  // --border-radius: 4px;
  // --color: #333;
  // --border-color: #999;
  // --border-color-hover: #666;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $error-color: #F1453D;
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }

    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
        box-shadow: 1px 1px 5px $border-color-hover;
        transition: all .2s;
      }

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }

    &.error {
      &:not(:last-child) {
        margin-right: 7px;
      }

      > input {
        border-color: $error-color;

        &:focus {
          box-shadow: inset 0 0px 0px $error-color;
        }
        &:hover {
          box-shadow: 1px 1px 5px $error-color;
          transition: all .2s;
        }
      }
    }
    .icon-error {
      fill: $error-color;
    }
    .message-error {
      color: $error-color;
    }

  }
</style>
63