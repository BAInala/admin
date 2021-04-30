<template>
  <div class="resetpassword-wrap">
    <div class="resetpsw-title">{{setptxt}}</div>
    <div class="resetpsw-content">
      <div class="resetpsw-now">
          <div class="resetpsw-choose">
            <el-steps :active="setpactive" >
              <el-step title="身份验证"></el-step>
              <el-step title="重置密码"></el-step>
              <el-step title="完成"></el-step>
            </el-steps>
          </div>

          <!--身份验证 -->
          <div class="resetpswContent" v-if="setpactive==0">
            <el-form :model="resetAuthentForm" :rules="resetAuthent" ref="resetAuthentForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="账号类型" >
                  <el-radio-group v-model="resetAuthentForm.radioType" size="small" prop="radioType">
                    <el-radio label=1 border>备选项1</el-radio>
                    <el-radio label=2 border>备选项2</el-radio>
                  </el-radio-group>
              </el-form-item>

              <el-form-item label="身份证号" prop="sfzcode">
                <el-input type="text" v-model="resetAuthentForm.sfzcode" autocomplete="off" placeholder="输入店铺绑定的身份证号"></el-input>
              </el-form-item>

               <el-form-item  label="手机号" prop="telnum">
                  <el-input
                    v-model.number="resetAuthentForm.telnum"
                    placeholder="请输入手机号"
                  >
                  </el-input>
                </el-form-item>

                  <!-- 获取验证码 -->
                <el-form-item label="验证码" prop="telcode" class="huoqu-div">
                    <el-col class="line" :span="24">
                      <el-input
                        type="password"
                        placeholder="请输入验证码"
                        v-model="resetAuthentForm.telcode"
                        autocomplete="off"
                      >
                      </el-input>
                    </el-col>
                    <div class="huoqu-btn">
                      <span>|</span>
                      <el-button type="text" class="maincolor" :disabled="disabled"  @click="huoqucode()">{{btntxt}}</el-button>
                    </div>
                </el-form-item>

              <el-form-item class="resetpsw-button p-t-20">
                <el-button type="success" @click="setpswSubmit('resetAuthentForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 重置密码 -->
          <div class="resetpswContent" v-if="setpactive==1">
            <el-form :model="resetpswruleForm" :rules="resetRules" ref="resetpswruleForm" label-width="100px" class="demo-resetpswruleForm">
              <el-form-item label="设置密码" prop="pass">
                <el-input type="password" v-model="resetpswruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="resetpswruleForm.checkPass" autocomplete="off" placeholder="请重新输入密码"></el-input>
              </el-form-item>
              <el-form-item class="resetpsw-button p-t-20">
                <el-button type="success" @click="setpswSubmit('resetpswruleForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 完成 -->
          <div class="resetpswContent" v-if="setpactive==2">
            <!--完成 -->
            <div class="maincolor resetpsw-tips">
                重置成功哦,请登录
            </div>
            <!-- 跳到登录页面 -->
             <div class="register-tips">
                    <router-link to="/Login">
                      <p class="forgetText">立即登录</p>
                    </router-link>

              </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.resetpswruleForm.checkPass !== '') {
          this.$refs.resetpswruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.resetpswruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disabled: false,
      setpactive: 0,
      setptxt: '身份验证',
      btntxt: '获取验证码',
      resetAuthentForm: {
        radioType: '1',
        sfzcode: '',
        telnum: '',
        telcode: ''

      },
      resetAuthent: {
        radioType: [{ required: true, message: '请选择账号类型', trigger: 'change' }],
        sfzcode: [{ required: true, message: '请输入身份证号', trigger: 'blur' },
          {
            validator: function validateIdNo (rule, value, callback) {
              const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
              if (!value) {
                callback()
              } else {
                if (!reg.test(value)) {
                  callback(new Error('请输入正确的身份证号码'))
                } else {
                  callback()
                }
              }
            }

          }],
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
        telcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      // 重置密码
      resetpswruleForm: {
        pass: '',
        checkPass: ''
      },
      resetRules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2 }
        ]
      }

    }
  },
  created () {
    // this.$store.commit('clearTags')
  },
  methods: {
    // 获取验证码
    huoqucode () {
      this.$refs.resetAuthentForm.validateField('telnum', (phonevalid) => {
        if (!phonevalid) {
          this.time = 60
          this.disabled = true
          this.timer()
          //  请求验证码
          /* axios.post(url).then(
              res=>{
              this.phonedata=res.data;
          }) */
        } else {
          return false
        }
      })
      if (!this.resetAuthentForm.telnum) {
        console.log(this.$refs.resetAuthentForm)
        this.$refs.resetAuthentForm.validateField('telnum')
      } else {

      }
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.disabled = false
      }
    },
    // 重置密码
    setpswSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 重置成功-到完成
          this.setpactive += 1
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .resetpassword-wrap{
    background: #fff;
    width: 100%;
    height: 100%;
  }
  .resetpsw-title{
      height: 20px;
      position: absolute;
      margin: 0 auto;
      left: 20%;
      top:145px;
      font-weight: 700;
  }
  .resetpsw-content{
    width: 60%;
    height: 558px;
    position: absolute;
    margin: 0 auto;
    background: #F4F6F4;
    left: 20%;
    top:200px
  }
  .resetpsw-choose{
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;

  }
  .resetpswContent{
      width: 400px;
      padding-top: 40px;
      margin: 0 auto;
  }
  .resetpsw-button{
    text-align: center;
  }
  .resetSuccess{
       width: 80px;
       height: 80px;
  }
  .resetpsw-tips{
    font-size: 20px;
    padding: 80px 7px 20px 60px;
    line-height: 30px;

  }
  .forgetText{
   font-weight: 400;
   color: #2A54CC;
   padding-left: 60px;
  }
  >>>.el-step__title.is-process,>>>.el-step__head.is-process {
    color: #21CA2E;
  }
>>>.el-step__head.is-process{
   border-color: #21CA2E;
}
.huoqu-btn{
  position: absolute;
    right: 5px;

}
.huoqu-btn span{
  display: inline-block;
  color: #d9d9d9;
  padding: 0 5px;
}
</style>
