<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            background-color="#fff"
            text-color="#323232"
            active-text-color="#21CA2E"
            active-background-color="#EEFFED"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'el-icon-menu',
          index: 'firstpage',
          title: '后台首页'

        },
        {
          icon: 'el-icon-goods',
          index: 'goodsmanange',
          title: '商品管理',
          subs: [
            {
              index: 'newgoods',
              title: '发布新商品'
            },
            {
              index: 'goodslist',
              title: '商品列表'
            }, {
              index: 'goodssource',
              title: '商品素材'
            }, {
              index: 'goodsdraft',
              title: '草稿箱'
            }
          ]
        },
        {
          icon: 'el-icon-service',
          index: 'service',
          title: '客服',
          subs: [
            {
              index: 'livechat',
              title: '实时聊天'
            },
            {
              index: 'servicetools',
              title: '客服工具'
            }, {
              index: 'messagesetting',
              title: '消息设置'
            }, {
              index: 'servicedata',
              title: '客服数据'
            }, {
              index: 'contactyigou',
              title: '联系益购'
            }, {
              index: 'chathistory',
              title: '聊天记录查询'
            }
          ]
        },
        {
          icon: 'el-icon-location',
          index: 'location',
          title: '物流管理'
        },
        {
          icon: 'el-icon-tickets',
          index: 'tickets',
          title: '营销工具'
        },
        {
          icon: 'el-icon-question',
          index: 'charts',
          title: '售后工作台'
        },

        {
          icon: 'el-icon-news',
          index: '7',
          title: '数据总览'
        },
        {
          icon: 'el-icon-view',
          index: '8',
          title: '资金管理'
        },
        {
          icon: 'el-icon-setting',
          index: '9',
          title: '店铺管理'
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    },
    collapse () {
      return this.$store.state.collapse
    }
  }
}
</script>
<style lang="scss">
    @import "../assets/css/submenu.css";
</style>
<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    left: 20px;
    border-radius: 20px;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
}
.sidebar > ul {
    height: 100%;
}
.el-menu-item:hover,.el-submenu__title:hover{
    color:#21CA2E !important;
    background-color:#EEFFED !important;
}
</style>
