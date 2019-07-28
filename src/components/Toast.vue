<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewToast'
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: $font-size;
  color: white;
  height: $toast-height;
  line-height: 1.8;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0 10px;
}
</style>
