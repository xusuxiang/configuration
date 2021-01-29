import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home'),
      children: [
        {
          path: '/HomeConfig',
          name:'HomeConfig',
          component: () => import('../views/HomeConfig')
        },
        {
          path: '/LoginConfig',
          name:'LoginConfig',
          component: () => import('../views/LoginConfig')
        },
        {
          path: '/bottom',
          name: 'bottom',
          component: () => import('../views/bottom')
        },
        {
          path: '/center',
          name: 'center',
          component: () => import('../views/center')
        },
        {
          path: '/logo',
          name: 'logo',
          component: () => import('../views/logo')
        },
        //以下是首页配置展示
        {
          path: '/HomeConfigShow',
          name: 'HomeConfigShow',
          component: () => import('../views/HomeConfigShow')
        },
        {
          path: '/logoShow',
          name: 'logoShow',
          component: () => import('../views/logoShow')
        },
        {
          path: '/centerShow',
          name: 'centerShow',
          component: () => import('../views/centerShow')
        },
        {
          path: '/bottomShow',
          name: 'bottomShow',
          component: () => import('../views/bottomShow')
        },
        //以下是登录配置显示
        {
          path: '/LoginConfigShow',
          name: 'LoginConfigShow',
          component: () => import('../views/LoginConfigShow')
        }
      ]
    },
  ],
  mode: 'history'
})
