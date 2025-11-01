<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/**
 * @description 根组件
 * @returns {Object} 组件配置对象
 */
export default {
  name: 'App',
  mounted() {
    console.log('1234');
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
