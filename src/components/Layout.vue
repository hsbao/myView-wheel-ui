<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewLayout'
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}
</style>
