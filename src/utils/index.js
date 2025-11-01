import Vue from 'vue';
import * as date from './date';
import * as cookies from './cookies';
export default {
  date,
  cookies
};
Vue.prototype.$utils = {
  date,
  cookies
};
