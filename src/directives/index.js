import resize from './resize';
import copy from './copy';
import waterMark from './waterMark';

export default {
  install(Vue) {
    Vue.directive('resize', resize);
    Vue.directive('copy', copy);
    Vue.directive('waterMark', waterMark);
  }
};
