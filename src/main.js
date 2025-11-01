/**
 * @description 项目入口文件
 */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import TDesign from 'tdesign-vue';
import '@/utils';
import 'tdesign-vue/es/style/index.css';
import '@/styles/index.less';
// td theme
import '@/styles/theme.css';
import '@/api';
import directives from './directives';
import router from './router';
import HiCard from '@/components/card/index.vue';
import HiCardItem from '@/components/card/item.vue';
import HiEllipsis from '@/components/ellipsis/index.vue';
import HiAlert from '@/components/alert/index.vue';
import HiIcon from '@/components/icon/index.vue';

Vue.use(TDesign);
Vue.use(directives);
Vue.component('HiCard', HiCard);
Vue.component('HiCardItem', HiCardItem);
Vue.component('HiEllipsis', HiEllipsis);
Vue.component('HiAlert', HiAlert);
Vue.component('HiIcon', HiIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
