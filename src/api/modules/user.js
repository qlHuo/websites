/**
 * @description 用户相关接口
 */
import request from '@/utils/request';

export default {
  /**
   * @description 用户登录
   * @param {Object} data 登录数据
   * @returns {Promise}
   */
  register(data) {
    return request({
      url: '/api/auth/register',
      method: 'post',
      data,
      // 是否需要认证
      auth: false
    });
  },
  /**
   * @description 用户登录
   * @param {Object} data 登录数据
   * @returns {Promise}
   */
  login(data) {
    return request({
      url: '/api/auth/login',
      method: 'post',
      data,
      // 是否需要认证
      auth: false
    });
  }
};
