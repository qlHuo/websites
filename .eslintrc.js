module.exports = {
  root: true, // 在根目录下寻找.eslintrc.js文件，如果当前工作区打开的项目不是在根目录，则查找.eslintrc.js文件会失败，且eslint检查也不会生效
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended' // 冲突时使用prettier的规则进行覆盖
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 0,
    'vue/no-mutating-props': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/valid-template-root': 0,
    'no-empty': 0
  }
};
