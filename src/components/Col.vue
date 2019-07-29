<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 80px;
  background: pink;
  border: 1px solid purple;
  width: 50%;

  $col-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$col-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $offset-prefix: offset-;
  @for $m from 1 through 24 {
    &.#{$offset-prefix}#{$m} {
      margin-left: ($m / 24) * 100%;
    }
  }
}
</style>
