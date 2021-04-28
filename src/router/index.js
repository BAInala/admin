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
      },
      { // 数据总览
        path: '/jingyingview',
        name: 'jingyingview',
        meta: {
          title: '经营总览'
        },
        component: () => import(
          '../views/dataoverview/jingyingView.vue')
      },
      {
        path: '/trafficdata',
        name: 'trafficdata',
        meta: {
          title: '流量数据'
        },
        component: () => import(
          '../views/dataoverview/trafficData.vue')
      },
      {
        path: '/productdata',
        name: 'productdata',
        meta: {
          title: '商品数据'
        },
        component: () => import(
          '../views/dataoverview/productData.vue')
      },
      {
        path: '/tradingdata',
        name: 'tradingdata',
        meta: {
          title: '交易数据'
        },
        component: () => import(
          '../views/dataoverview/tradingData.vue')
      },
      {
        path: '/servicedata',
        name: 'servicedata',
        meta: {
          title: '服务数据'
        },
        component: () => import(
          '../views/dataoverview/serviceData.vue')
      },
      {
        path: '/publicdata',
        name: 'publicdata',
        meta: {
          title: '公益数据'
        },
        component: () => import(
          '../views/dataoverview/publicData.vue')
      },
      { // 资金管理
        path: '/fundcenter',
        name: 'fundcenter',
        meta: {
          title: '资金中心'
        },
        component: () => import(
          '../views/fundmanage/fundCenter.vue')
      }, {
        path: '/fundlimit',
        name: 'fundlimit',
        meta: {
          title: '资金限制'
        },
        component: () => import(
          '../views/fundmanage/fundLimit.vue')
      }, {
        path: '/invoicemanage',
        name: 'invoicemanage',
        meta: {
          title: '发票管理'
        },
        component: () => import(
          '../views/fundmanage/invoiceManage.vue')
      },
      {
        path: '/checkfundcenter',
        name: 'checkfundcenter',
        meta: {
          title: '对账中心'
        },
        component: () => import(
          '../views/fundmanage/checkfundCenter.vue')
      },
      { // 店铺管理
        path: '/shopmessage',
        name: 'shopmessage',
        meta: {
          title: '店铺信息'
        },
        component: () => import(
          '../views/shopmanage/shopMessage.vue')
      }, {
        path: '/childaccount',
        name: 'childaccount',
        meta: {
          title: '子账号管理'
        },
        component: () => import(
          '../views/shopmanage/childAccount.vue')
      }, {
        path: '/shopcheckout',
        name: 'shopcheckout',
        meta: {
          title: '退店'
        },
        component: () => import(
          '../views/shopmanage/shopCheckout.vue')
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
