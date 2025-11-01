/**
 * @description Vuex状态管理
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {} // 用户信息
  },
  mutations: {
    /**
     * @description 设置用户信息
     * @param {Object} state Vuex状态
     * @param {Object} userInfo 用户信息
     */
    SET_USERINFO(state, userInfo) {
      console.log('SET_USERINFO', userInfo);
      state.userInfo = userInfo;
    }
  },
  actions: {}
});
