<template>
  <div class="login-wrap">
      <div class="login-yigouimg">
         <img src="../assets/img/login/l1.png" alt="">
      </div>
    <div class="yigoul-login">
      <div class="yigoul-title">青宝益购商家后台登陆</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="yigoul-content"
      >
        <el-form-item prop="username">
          <el-input
            v-model="param.username"
            placeholder="请输入手机号/用户名"
            prefix-icon="el-icon-user-solid
"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-col class="line" :span="16">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="param.password"
              @keyup.enter="submitForm()"
              prefix-icon="el-icon-lock"
            >
            </el-input>
          </el-col>
          <el-col :span="2"><span class="linespan" >|</span></el-col>
          <el-col class="line" :span="6">
            <router-link to="/tabs">
              <p class="forgetText">忘记密码?</p>
            </router-link>
          </el-col>
        </el-form-item>
        <div class="login-btn">
          <el-button class="maincolor" @click="submitForm()">登录</el-button>
        </div>
        <div class="login-tips">
            <el-col :span="7">
               <p class="linespan">还没有账号?</p>
            </el-col>
            <el-col :span="7">
              <router-link to="/tabs">
               <p class="forgetText">立即注册</p>
               </router-link>
            </el-col>
            <el-col :span="8" :offset="2">
              <router-link to="/tabs">
               <p class="forgetText l-right">短信验证码登录</p>
               </router-link>
            </el-col>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      param: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  created () {
    this.$store.commit('clearTags')
  },
  methods: {
    submitForm () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功')
          localStorage.setItem('ms_username', this.param.username)
          this.$router.push('/')
          console.log('222333')
        } else {
          this.$message.error('请输入账号和密码')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;

}
.login-yigouimg img{
   position: absolute;
   display: block;
   width: 209px;
   left: 5%;
   top: 5%;
}
.yigoul-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  color: #21CA2E;
}
.yigoul-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  overflow: hidden;
}
.el-input>>> .el-input__inner {
  border: 0px !important;
  border-radius: 0px !important;
  border-bottom: 1px solid #D0D0D0 !important;
}
.linespan{
   display: inline-block;
    padding-left: 11px;
    color: #D6D7DC;
}
.forgetText{
   font-weight: 400;
   color: #2A54CC;
   padding-left: 8px;
}

.yigoul-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn>>> button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  background-color:#21CA2E;
  color:#fff
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
