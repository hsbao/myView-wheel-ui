<template>
  <div>
    <view-button>默认按钮</view-button>
    <view-button icon="settings">图标按钮</view-button>
    <view-button :loading="true">加载中</view-button>
    <view-button disabled>禁用按钮</view-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
import ViewButton from '../../../src/components/buttons/Button'
export default {
  data() {
    return {
      content: `
        <view-button>默认按钮</view-button>
        <view-button icon="settings">图标按钮</view-button>
        <view-button :loading="true">加载中</view-button>
        <view-button disabled>禁用按钮</view-button>
      `
    }
  },
  components: {
    ViewButton
  }
}
</script>
