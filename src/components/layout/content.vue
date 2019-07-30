<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewContent'
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
