<template>
    <div class="header">
      <div class="header-left clearfix">
          <div class="header-radius">
            <span class="header-text header-first">益购</span>
            <span class="header-text">|</span>
            <span class="header-text">商家后台</span>
            <!-- 搜素关键词 -->
            <div style="width:200px;display:inline-block;margin-left:100px;">
              <el-input
                placeholder="搜索关键词"
                prefix-icon="el-icon-search"
                v-model="searchText"
               class="haha"
              >
              </el-input>
            </div>

              <!-- 消息中心 -->
                <div class="btn-bell btn-bell-parent">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                            <p class="yigouText">消息</p>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>

                <!-- 益购首页 -->
             <div class="btn-bell">
                      <router-link to="/firstpage">
                          <img class="yigoulog" src="../assets/img/log.png" />
                          <p class="yigouText">益购首页</p>
                      </router-link>
              </div>

          </div>
      </div>
        <div class="header-right">
            <div class="header-user-con">

                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../assets/img/img.jpg" />
                </div>
                 <div class="user-avator">
                    <p> {{username}}</p>
                    <p>qvder</p>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '我是哈哈哈',
      message: 10,
      searchText: '',
      classObject: {

      }

    }
  },
  computed: {
    username () {
      const username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand (command) {
      // eslint-disable-next-line eqeqeq
      if (command == 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    }

  },
  mounted () {

  }
}
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 15px;
}

.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header-radius{
  background: #FFFFFF;
  border-radius: 30px;
  height: 50px;
  margin-top: 10px;
  margin-left: 20px;
}
.header .header-text{
    color: #21CA2E;
    line-height: 50px;
    padding-left: 6px;
}
.header .header-first{
  margin-left: 15px;
}
.header .haha>>>.el-input__inner{
  border-radius:21px!important;
  text-align:center!important;
  background: #eee!important;

}

.divline{
  display: inline-block;
  margin-top: 10px;
}
.yigoulog{
  width: 14px;
}
.yigouText{
  color: #666666;
  font-size: 14px;
}
.header-left{
   float: left;
   width: 80%;

}
.header-right {
    float: right;
    margin-right: 35px;
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}

.btn-bell{
    display: inline-block;
    width: 56px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    float: right;
    margin-right: 30px;
    margin-top: 9px;
}
.btn-bell-parent{
  position: relative;
}
.btn-bell-badge {
    position: absolute;
    right: 10px;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
