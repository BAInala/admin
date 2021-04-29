<template>
  <div class="login-wrap">
      <div class="login-yigouimg">
         <img src="../assets/img/login/l1.png" alt="">
      </div>
    <div class="yigoul-login">
      <div class="yigoul-title">青宝益购商家后台登录</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="yigoul-content"
       v-if="origilogin"
      >
        <el-form-item prop="username">
          <el-input
            v-model="param.username"
            :placeholder="firstTxt"
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
            <router-link to="/resetpasssword">
              <p class="forgetText">忘记密码?</p>
            </router-link>
          </el-col>
        </el-form-item>
        <div class="login-check">
            <el-col :span="5">
               <el-checkbox v-model="mindpassword">
                 <p>记住密码</p>
                 </el-checkbox>
            </el-col>
            <el-col :span="5" :offset="12">
             <el-checkbox v-model="autologin">
               <p>自动登录</p>
               </el-checkbox>
            </el-col>
        </div>
        <div class="login-btn">
          <el-button class="maincolor" @click="submitForm()">登录</el-button>
        </div>
        <div class="login-tips">
            <el-col :span="7">
               <p class="linespan">还没有账号?</p>
            </el-col>
            <el-col :span="7">
              <router-link to="/register">
               <p class="forgetText">立即注册</p>
               </router-link>
            </el-col>
            <el-col :span="8" :offset="5">
               <p class="forgetText login-yanzheng l-right" @click="yanzhenglogin">短信验证码登录</p>
            </el-col>
        </div>

      </el-form>

      <!-- 验证码登录 -->
      <el-form
        :model="valiparam"
        :rules="valirules"
        ref="yanzhengLogin"
        label-width="0px"
        class="yigoul-content"
        v-if="!origilogin"
      >
        <el-form-item prop="telnum">
          <el-input
            v-model="valiparam.telnum"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user-solid
"
          >
          </el-input>
        </el-form-item>
        <!-- 获取验证码 -->
         <el-form-item prop="code">
          <el-col class="line" :span="13">
            <el-input
              type="password"
              placeholder="请输入验证码"
              v-model="valiparam.code"
              autocomplete="off"
              prefix-icon="el-icon-circle-check"
            >
            </el-input>
          </el-col>
          <el-col class="huoqu-btn" :span="11">
            <el-button class="maincolor" :disabled="disabled"  @click="huoqucode()">{{btntxt}}</el-button>
          </el-col>
        </el-form-item>
        <div class="login-check">
            <el-col :span="5" :offset="17">
             <el-checkbox v-model="autologin">
               <p>自动登录</p>
              </el-checkbox>
            </el-col>
        </div>
        <div class="login-btn">
          <el-button class="maincolor" @click="yanzhengSave()">登录</el-button>
        </div>
        <div class="login-tips">
            <el-col :span="7">
               <p class="linespan">还没有账号?</p>
            </el-col>
            <el-col :span="7">
              <router-link to="/register">
               <p class="forgetText">立即注册</p>
               </router-link>
            </el-col>
            <el-col :span="8" :offset="5">
               <p class="forgetText login-yanzheng l-right" @click="telLogin">账号密码登录</p>
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
      origilogin: true, // 正常账号密码登录 否则验证码登录
      firstTxt: '请输入手机号/用户名',
      param: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号/用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      autologin: false,
      mindpassword: false,
      // 验证码
      btntxt: '点击获取验证码',
      disabled: false,
      valiparam: {
        telnum: '',
        code: ''
      },
      valirules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      valiautologin: false

    }
  },
  created () {
    // this.$store.commit('clearTags')
  },
  methods: {
    submitForm () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功')
          localStorage.setItem('username', this.param.username)
          this.$router.push('/')
        } else {
          return false
        }
      })
    },
    // 短信验证码登录
    yanzhenglogin () {
      this.origilogin = false
    },
    // 点击账号密码登录
    telLogin () {
      this.origilogin = true
    },
    huoqucode () {
      // 获取验证码
      // var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.param.telnum) {
        debugger
        console.log(this.$refs.yanzhengLogin)
        this.$refs.yanzhengLogin.validateField('telnum')
      // eslint-disable-next-line brace-style
      }
      // else if (!reg.test(this.param.telnum)) {
      //   alert('手机格式不正确')
      // }
      else {
        this.time = 60
        this.disabled = true
        this.timer()
        //  请求验证码
        /* axios.post(url).then(
              res=>{
              this.phonedata=res.data;
          }) */
      }
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '点击获取验证码'
        this.disabled = false
      }
    }
  }
}
</script>
<style lang="scss">
.el-form-item__content{
border: 0px !important;
  border-radius: 0px !important;
  border-bottom: 1px solid #D0D0D0 !important;
  background-color:#fff ;

}
.el-input--prefix .el-input__inner{
  border: 0px !important;
  border-radius: 0px !important;
  /* border-bottom: 1px solid #D0D0D0 !important; */
  outline: 0px !important;
}
</style>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url(../assets/img/login-bg.jpg); */
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
  left: 65%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  overflow: hidden;
}

.login-check{
  margin-bottom: 12px;
  height: 37px;
  margin-bottom: 20px;
}
.login-check p{
  color: #999;
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
  color:#fff;
  border: 1px solid #21ca2e;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
  height: 30px;
}
.login-yanzheng{
  cursor: pointer;
}
/* 获取验证码 */
.huoqu-btn>>> button{
  background-color:#21CA2E;
  color:#fff;
  border: 1px solid #21ca2e;
    min-height: 26px;
    font-size: 14px;
    padding: 4px 8px;
    cursor: pointer;
}
.huoqu-btn>>> button.el-button.is-disabled{
  color: #fff;
  background-color:  #C2C2C2;;
  border-color: #EBEEF5;
}
</style>
