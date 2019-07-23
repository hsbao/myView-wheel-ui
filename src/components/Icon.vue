<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'View-Icon',
  props: {
    name: String
  }
}
</script>

<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
  }
</style>
