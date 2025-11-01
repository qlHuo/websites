/**
 * @description Vue项目配置文件
 */
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_TITLE
    }
  },

  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always',
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/colors.less";
          `
        }
      }
    }
  },
  devServer: {
    port: 8080,
    open: true
  },
  lintOnSave: true,
  chainWebpack: config => {
    // 修改 vue-loader 的选项（preserveWhitespace / 使用 vue-template-babel-compiler）
    const vueRule = config.module.rule('vue');
    vueRule.use('vue-loader').tap(options => {
      options = options || {};
      options.compilerOptions = options.compilerOptions || {};
      options.compilerOptions.preserveWhitespace = false;
      // 如果需要在模板中支持可选链（可选）
      try {
        options.compiler = require('vue-template-babel-compiler');
      } catch (e) {
        // 如果没有安装 vue-template-babel-compiler，则忽略或提示
        // console.warn('请安装 vue-template-babel-compiler 才能在模板中使用可选链');
      }
      return options;
    });
  }
};
