import Vue from 'vue';

// 使用 Webpack 的 require.context 方法动态加载模块
const modules = require.context('./modules', false, /\.js$/);

// 创建一个空对象，用于存储加载的模块
const apiModules = {};

// 遍历加载的模块文件
modules.keys().forEach(fileName => {
  // 获取模块名称，去掉 './' 和 '.js' 后缀
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  const moduleContent = modules(fileName);
  apiModules[moduleName] = moduleContent.default || moduleContent;
});

// 将 apiModules 挂载到 Vue 原型上，作为 $api 属性
Vue.prototype.$api = apiModules;
