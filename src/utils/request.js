/**
 * @description axios请求封装
 */
import axios from 'axios';
import utils from '@/utils';
import router from '../router';
import { MessagePlugin } from 'tdesign-vue';

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_BASE_API,
  baseURL: 'http://172.16.3.164:8080',
  timeout: 1000 * 30
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    let { baseURL } = config;
    // 如果url中没有带协议，那么允许自己拼接
    if (config.host) {
      baseURL = config.host;
    }
    config.url = `${baseURL}${config.url}`;
    // 登录接口不需要添加token
    if (config.auth === false) {
      return config;
    }
    // 获取token
    const token = utils.cookies.get('token');
    if (!token) {
      const redirect = window.location.href;
      if (!redirect.includes('login')) {
        utils.cookies.set('redirect', redirect, '/');
      }
      router.push({
        path: '/login'
      });
      return Promise.reject(new Error('请先登录'));
    }
    // 如果token存在，则添加到请求头中
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const axiosData = response.data;
    const { status, message, data } = axiosData;
    if (status === 200) {
      return data;
    }
    return Promise.reject(message || '请求错误');
  },
  error => {
    // 统一处理非2xx状态码
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          MessagePlugin.error('未授权，请登录');
          return router.push('/login');
        case 403:
          MessagePlugin.error('没有权限访问');
          return router.push('/login');
        case 500:
          return MessagePlugin.error('服务器内部错误');
        default:
          console.error('未处理的HTTP状态码:', status);
      }
    }
    // 捕获网络错误或其他异常
    const errorMessage = error.response?.data?.message || error.message || '请求错误';
    // return MessagePlugin.error(errorMessage)
    return Promise.reject(new Error(errorMessage));
  }
);

export default service;
