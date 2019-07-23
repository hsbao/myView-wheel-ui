<template>
  <button class="view-button">按钮</button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.view-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  outline: none;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active { 
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>
