<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewSlider'
}
</script>

<style lang="scss" scoped>
.sider {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
