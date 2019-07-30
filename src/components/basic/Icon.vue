<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import '../../assets/symbol/svg.js'
export default {
  name: 'ViewIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>
