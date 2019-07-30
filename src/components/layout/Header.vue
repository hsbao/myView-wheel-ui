<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewHeader'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
