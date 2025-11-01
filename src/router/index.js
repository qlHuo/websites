/**
 * @description 路由配置
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PageLayout',
    component: () => import('@/components/layouts/PageLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      },

      {
        path: 'expand',
        name: 'Expand',
        component: () => import('@/views/expand/index.vue'),
        meta: { title: '展开' }
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginLayout',
    component: () => import('@/views/login/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: '登陆页面' }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/login/Register.vue'),
        meta: { title: '注册页面' }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // const token = utils.cookies.get('token') // 获取 token
  // // 如果访问的是登录或注册页面，直接放行
  // if (to.name === 'Login' || to.name === 'Register') {
  //   next()
  //   return
  // }
  // // 如果没有 token，跳转到登录页面
  // if (!token) {
  //   next('/login')
  //   return
  // }

  // 如果有 token，直接放行
  next();
});

export default router;
