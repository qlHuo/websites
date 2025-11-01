<template>
  <div class="default-page">
    <!-- 图片展示区域 -->
    <img :src="imageUrl" alt="Default Image" class="default-image" />
    <!-- 描述文本区域 -->
    <p class="default-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  props: {
    // 可以通过 props 传递图片的 URL 地址和描述信息
    imageUrl: {
      type: String,
      default: 'https://example.com/default-image.jpg'
    },
    description: {
      type: String,
      default: '暂无数据'
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
/* 定义默认页面的样式 */
.default-page {
  text-align: center;
  padding: 16px;
}

/* 定义图片的样式 */
.default-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

/* 定义描述文本的样式 */
.default-description {
  font-size: 16px;
  color: #333;
}
</style>
