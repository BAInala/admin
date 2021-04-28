import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/firstpage',
        name: 'firstpage',
        meta: {
          title: '后台首页'
        },
        component: () => import(
          '../views/firstPage.vue')
      },
      {
        path: '/newgoods',
        name: 'newgoods',
        meta: {
          title: '发布新商品'
        },
        component: () => import(
          '../views/goodsmanage/newGoods.vue')
      },
      {
        path: '/goodslist',
        name: 'goodslist',
        meta: {
          title: '商品列表'
        },
        component: () => import(
          '../views/goodsmanage/goodsList.vue')
      },
      {
        path: '/goodssource',
        name: 'goodssource',
        meta: {
          title: '商品素材'
        },
        component: () => import(
          '../views/goodsmanage/goodsSource.vue')
      }, {
        path: '/goodsdraft',
        name: 'goodsdraft',
        meta: {
          title: '草稿箱'
        },
        component: () => import(
          '../views/goodsmanage/goodsDraft.vue')
      },
      {
        path: '/livechat',
        name: 'livechat',
        meta: {
          title: '实时聊天'
        },
        component: () => import(
          '../views/kefuservice/liveChat.vue')
      }, {
        path: '/servicetools',
        name: 'servicetools',
        meta: {
          title: '客服工具'
        },
        component: () => import(
          '../views/kefuservice/serviceTools.vue')
      },
      {
        path: '/messagesetting',
        name: 'messagesetting',
        meta: {
          title: '消息设置'
        },
        component: () => import(
          '../views/kefuservice/messageSetting.vue')
      }, {
        path: '/servicedata',
        name: 'servicedata',
        meta: {
          title: '客服数据'
        },
        component: () => import(
          '../views/kefuservice/serviceData.vue')
      }, {
        path: '/contactyigou',
        name: 'contactyigou',
        meta: {
          title: '联系益购'
        },
        component: () => import(
          '../views/kefuservice/contactYigou.vue')
      }, {
        path: '/chathistory',
        name: 'chathistory',
        meta: {
          title: '聊天记录查询'
        },
        component: () => import(
          '../views/kefuservice/chatHistory.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import(
      '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
