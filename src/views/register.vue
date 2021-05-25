<template>
  <div class="register-wrap">
      <div class="register-yigouimg">
         <img src="../assets/img/login/l1.png" alt="">
      </div>
    <div class="yigoul-login">
      <div class="yigoul-title">青宝益购商家后台注册</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="register"
        label-width="0px"
        class="yigoul-content"
      >
        <el-form-item prop="telnum">
          <el-input
            v-model="param.telnum"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user-solid
"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="设置密码"
              v-model="param.password"
              @keyup.enter="submitForm()"
              prefix-icon="el-icon-lock"
            >
            </el-input>
        </el-form-item>
        <!-- 获取验证码 -->
         <el-form-item prop="code">
          <el-col class="line" :span="13">
            <el-input
              type="password"
              placeholder="请输入验证码"
              v-model="param.code"
              autocomplete="off"
              prefix-icon="el-icon-circle-check"
            >
            </el-input>
          </el-col>
          <el-col class="huoqu-btn" :span="11">
            <el-button class="maincolor" :disabled="disabled"  @click="huoqucode()">{{btntxt}}</el-button>
          </el-col>
        </el-form-item>
        <div class="register-check">
            <el-col :span="5">
               <el-checkbox v-model="mindpassword">
                 <p>记住密码</p>
                 </el-checkbox>
            </el-col>
            <el-col :span="5" :offset="14">
             <el-checkbox v-model="autologin">
               <p>自动登录</p>
               </el-checkbox>
            </el-col>
        </div>
        <div class="register-btn">
          <el-button class="maincolor" @click="submitForm()">登录</el-button>
        </div>
        <div class="register-tips">
            <el-col :span="7">
               <p class="linespan">已有账号?</p>
            </el-col>
            <el-col :span="7">
              <router-link to="/Login">
               <p class="forgetText">立即登录</p>
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
      disabled: false,
      time: 0,
      btntxt: '点击获取验证码',
      param: {
        telnum: '',
        password: '',
        code: ''
      },
      rules: {
        telnum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            validator: function (rule, value, callback) {
              const reg = /^[1][3-9][0-9]{9}$/
              if (!value) {
                callback()
              } else {
                if ((!reg.test(value))) {
                  callback(new Error('请输入正确的电话号码'))
                } else {
                  callback()
                }
              }
            }
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      autologin: false,
      mindpassword: false

    }
  },
  created () {
    // this.$store.commit('clearTags')
  },
  methods: {
    huoqucode () {
      // 获取验证码
      // var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.param.telnum) {
        debugger
        console.log(this.$refs.login)
        this.$refs.register.validateField('telnum')
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
    },
    submitForm () {
      this.$refs.register.validate((valid) => {
        if (valid) {
          this.$message.success('注册成功')// todo 注册成功应该跳转到登录页
          this.$router.push('/Login')
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.register-wrap{
.el-form-item__content{
border: 0px !important;
  border-radius: 0px !important;
  border-bottom: 1px solid #D0D0D0 !important;
  background-color:#fff ;

}
.el-input--prefix .el-input__inner{
  border: 0px !important;
  border-radius: 0px !important;
  outline: 0px !important;
}
}

// .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover{
//     background-color: rgb(60, 143, 67);
//     color: #fff;
//     border: 1px solid rgb(60, 143, 67);
// }
</style>

<style scoped>
.register-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url(../assets/img/login-bg.jpg); */
  background-size: 100%;

}
.register-yigouimg img{
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
.el-input--prefix .el-input__inner{
  border: 0px !important;
  border-radius: 0px !important;
  /* border-bottom: 1px solid #D0D0D0 !important; */
  outline: 0px !important;
}
.register-check{
  margin-bottom: 12px;
  height: 37px;
  margin-bottom: 20px;
}
.register-check p{
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
.register-btn {
  text-align: center;
}
.register-btn>>> button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  background-color:#21CA2E;
  color:#fff;
  border: 1px solid #21ca2e;
}
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
.register-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
