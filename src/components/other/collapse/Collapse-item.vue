<template>
  <div class="collapse-item">
    <header class="title" @click="open = !open">{{title}}</header>
    <section class="content" v-show="open">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ViewCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse-item {
    > .title {
      margin: -1px -1px 0 -1px;
      border: 1px solid $border-color;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .content {
      padding: 8px;
    }
  }
</style>
