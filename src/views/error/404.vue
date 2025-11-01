<template>
  <div class="not-found">
    <t-empty theme="404" title="页面不存在" summary="抱歉，您访问的页面不存在">
      <template #action>
        <t-button theme="primary" @click="goHome">返回首页</t-button>
      </template>
    </t-empty>
  </div>
</template>

<script>
/**
 * @description 404页面组件
 * @returns {Object} 组件配置对象
 */
export default {
  name: 'NotFound',
  methods: {
    /**
     * @description 返回首页
     * @returns {void}
     */
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}
</style>
