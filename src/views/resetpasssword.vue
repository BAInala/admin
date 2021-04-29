<template>
  <div class="resetpassword-wrap">
    <div class="resetpsw-title">{{setptxt}}</div>
    <div class="resetpsw-content">
      <div class="resetpsw-now">
          <div class="resetpsw-choose">
            <el-steps :active="0" >
              <el-step title="身份验证"></el-step>
              <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤 3" description="这段就没那么长了"></el-step>
            </el-steps>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      disabled: false,
      time: 0,
      setptxt: '身份验证',
      rules: {
        telnum: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            validator: function (rule, value, callback) {
              debugger
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
      }

    }
  },
  created () {
    // this.$store.commit('clearTags')
  },
  methods: {
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
</style>
