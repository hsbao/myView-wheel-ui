<template>
  <div 
    class="col" 
    :class="colClass"
    :style="colStyle"
  >
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
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      const { span, offset } = this
      return [
        span && `col-${span}`, 
        offset && `offset-${offset}`
      ]
    },
    colStyle() {
      const { gutter } = this
      return {
        paddingLeft: gutter / 2 + 'px', 
        paddingRight: gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    console.log(this.gutter)
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 80px;
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
