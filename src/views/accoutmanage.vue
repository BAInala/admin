<template>
  <div class="accout-top-wrap">
    <div class="accout-top-title">
     <Header/>
    </div>

    <div class="accoutma-title">{{setptxt}}</div>
    <div class="clearfix all-content">
      <div class="l-left">
        <el-menu :default-active="String(indexactive)" class="el-menu-vertical-demo" >
          <el-menu-item index="1" @click="viewdetail(1)">
            <template #title>基本信息</template>
          </el-menu-item>
          <el-menu-item index="2" @click="viewdetail(2)">
            <template #title>登录密码</template>
          </el-menu-item>
          <el-menu-item index="3" @click="viewdetail(3)">
            <template #title>手机号码</template>
          </el-menu-item>
          <el-menu-item index="4" @click="viewdetail(4)">
            <template #title>登录设置</template>
          </el-menu-item>
           <el-menu-item index="5" @click="viewdetail(5)">
            <template #title>登录记录</template>
          </el-menu-item>
        </el-menu>

      </div>
      <div class="l-left accoutma-content">

            <!-- <div class="accoutma-choose">
              <el-steps :active="indexactive" >
                <el-step title="身份验证"></el-step>
                <el-step title="重置密码"></el-step>
                <el-step title="完成"></el-step>
              </el-steps>
            </div> -->

            <!-- 1   基本信息 -->
            <div class="everyborder"  v-if="indexactive==1">
              <div class="accoutma-first">
                <div class="accout-f-con p-t-20">
                  <span class="spanpri">账户名</span>
                  <span class="spanpri">{{accout.name}}</span>
                </div>
                 <div class="accout-f-con" v-if="accout.child">
                  <span class="spanpri">关联子账号</span>
                  <span class="spanpri">{{accout.childname}}</span>
                  <el-button type="text" class="text-red" @click="viewdetail(2)">修改</el-button>
                </div>
                <div class="accout-f-con">
                  <span class="spanpri">登录密码</span>
                  <span class="spanpri">{{accout.pass}}</span>
                  <el-button type="text" class="text-red" @click="viewdetail(2)">修改</el-button>
                </div>
                <div class="accout-f-con">
                  <span class="spanpri">绑定手机号</span>
                  <span class="spanpri">{{accout.tel}}</span>
                  <el-button type="text" class="text-red" @click="viewdetail(3)">修改</el-button>
                </div>
                <div class="accout-f-con">
                  <span class="spanpri">登录手机验证</span>
                  <span class="spanpri">{{accout.teltext}}</span>
                  <el-button type="text" class="text-red" @click="viewdetail(4)">修改</el-button>
                </div>
                <div class="accout-f-con p-b-20">
                  <span class="spanpri">最近登录记录</span>
                  <el-button type="text" class="text-red" @click="viewdetail(5)">查看</el-button>
                </div>
              </div>
            </div>

            <!--2  登录密码 -->
              <div class="accoutmaContent" v-if="indexactive==2">
              <el-form :model="accoutmaruleForm" :rules="resetRules" ref="accoutmaruleForm" label-width="100px" class="demo-accoutmaruleForm">
                <el-form-item label="当前密码" prop="nowpass">
                  <el-input type="password" v-model="accoutmaruleForm.nowpass" autocomplete="off" placeholder="请输入当前密码"></el-input>
                </el-form-item>
                <el-form-item label="设置密码" prop="pass">
                  <el-input type="password" v-model="accoutmaruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="accoutmaruleForm.checkPass" autocomplete="off" placeholder="请重新输入密码"></el-input>
                </el-form-item>
                 <el-form-item  label="手机号" prop="telnum" >
                    <el-input v-model.number="accoutmaruleForm.telnum" placeholder="请输入手机号" :disabled="true"></el-input>
                  </el-form-item>

                  <!-- 获取验证码 -->
                  <el-form-item label="验证码" prop="telcode" class="huoqu-div">
                      <el-col class="line" :span="24">
                        <el-input
                          type="password"
                          placeholder="请输入验证码"
                          v-model="accoutmaruleForm.telcode"
                          autocomplete="off"
                        >
                        </el-input>
                      </el-col>
                      <div class="huoqu-btn">
                        <span>|</span>
                        <el-button type="text" class="maincolor" :disabled="disabled"  @click="huoqucode('accoutmaruleForm')">{{btntxt}}</el-button>
                      </div>
                      <div class="codevalide-text">无法收到验证码?</div>
                  </el-form-item>
                <el-form-item class="accoutma-button p-t-20">
                  <el-button type="success" @click="pswSubmit('accoutmaruleForm')">提交</el-button>
                </el-form-item>
              </el-form>
            </div>

            <!--3   手机号码更换 -->
            <div class="everyborder" v-if="indexactive==3">
                <div class="accoutma-choose">
                  <el-steps :active="stepactive" >
                    <el-step title="原手机号码"></el-step>
                    <el-step title="修改手机号码"></el-step>
                    <el-step title="修改成功"></el-step>
                  </el-steps>
                </div>
                <!-- 步骤1 -->
              <el-form v-show="stepactive==1" :model="resetoneForm" :rules="resetOneAuthent" ref="resetoneForm" label-width="100px" style="width:500px;margin:0 auto;padding-top:60px">
                <el-form-item  label="手机号" prop="telnum">
                    <el-input
                      v-model.number="resetoneForm.telnum"
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
                          v-model="resetoneForm.telcode"
                          autocomplete="off"
                        >
                        </el-input>
                      </el-col>
                      <div class="huoqu-btn">
                        <span>|</span>
                        <el-button type="text" class="maincolor" :disabled="disabled"  @click="huoqucode('resetoneForm')">{{btntxt}}</el-button>
                      </div>
                  </el-form-item>

                <el-form-item class="accoutma-button p-t-20">
                  <el-button type="success" @click="oldtelSubmit('resetoneForm')">提交</el-button>
                </el-form-item>
              </el-form>

              <!-- 步骤2 -->
               <el-form v-show="stepactive==2" :model="resettwoForm" :rules="resetTwoAuthent" ref="resetTwoForm" label-width="100px" style="width:500px;margin:0 auto;padding-top:60px">
                <el-form-item  label="手机号" prop="telnum">
                    <el-input
                      v-model.number="resettwoForm.telnum"
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
                          v-model="resettwoForm.telcode"
                          autocomplete="off"
                        >
                        </el-input>
                      </el-col>
                      <div class="huoqu-btn">
                        <span>|</span>
                        <el-button type="text" class="maincolor" :disabled="disabled"  @click="huoqucode('resetTwoForm')">{{btntxt}}</el-button>
                      </div>
                  </el-form-item>

                <el-form-item class="accoutma-button p-t-20">
                  <el-button type="success" @click="newtelSubmit('resetTwoForm')">提交</el-button>
                </el-form-item>
              </el-form>

              <!-- 步骤3 -->
              <div v-show="stepactive==3" style="line-height:80px">
                我是修改成功的

              </div>
            </div>

            <!-- 4   登录验证 -->
             <div class="telnumContent" v-if="indexactive==4">
              <el-form  ref="telyanzhengForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="登录时手机验证" prop="radioType">
                    <el-radio-group v-model="radioType" size="small">
                      <el-radio label=1 border>开启</el-radio>
                      <el-radio label=2 border>关闭</el-radio>
                    </el-radio-group>
                </el-form-item>
                 <el-form-item  size="small" style="color:#666">
                 关闭登录时手机校验，将无法确认是账号持有者本人登录
                </el-form-item>
                <el-form-item class="p-t-20">
                  <el-button type="success" @click="telyanZheng()">确认设置</el-button>
                </el-form-item>
              </el-form>
            </div>

            <!-- 5    登录记录-->
            <div v-if="indexactive==5">
              <!--完成 -->
              <div  class="denglv-record-content">
                 查看近三个月登录过的手机或浏览器，如发现可疑登录，请立即修改/设置登录密码。
              </div>
              <div class="denglv-record p-t-20">
                 <el-table
                    :data="tableData"
                    border
                    max-height="600"
                    style="width: 100%">
                     <el-table-column
                      prop="name"
                      label="设备型号"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      label="登录日期"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="登录地址">
                    </el-table-column>
                  </el-table>

              </div>
            </div>
       </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {

  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.accoutmaruleForm.checkPass !== '') {
          this.$refs.accoutmaruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.accoutmaruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disabled: false,
      indexactive: 1,
      setptxt: '账号管理',
      radioType: '1',
      stepactive: 1, // 更换手机 step
      accout: {
        name: '我是账户名',
        pass: '登录账号的密码',
        tel: '145***454334',
        teltext: '查看',
        child: true,
        childname: '客服小小'
      },
      tableData: [{
        date: '2016-05-02',
        name: '谷歌',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '火狐',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '哈哈哈',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '嗯嗯',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      btntxt: '获取验证码',
      resetoneForm: {
        telnum: '',
        telcode: ''
      },
      resettwoForm: {
        telnum: '',
        telcode: ''
      },
      resetOneAuthent: {
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
      resetTwoAuthent: {
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
      // 登录重置密码
      accoutmaruleForm: {
        nowpass: '',
        pass: '',
        checkPass: '',
        telnum: '153****33'
      },
      // 登录密码-验证
      resetRules: {
        nowpass: [
          { required: true, message: '请输入当前密码', trigger: 'blur' },
          { validator: validatePass }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2 }
        ],
        telnum: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        telcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }

    }
  },
  components: {
    Header

  },
  created () {
    // this.$store.commit('clearTags')
  },
  methods: {
    viewdetail ($index) {
      this.indexactive = $index
      this.stepactive = 1
      this.resetoneForm = {
        telnum: '',
        telcode: ''
      }
      this.resettwoForm = {
        telnum: '',
        telcode: ''
      }
      debugger
      this.accoutmaruleForm = {
        nowpass: '',
        pass: '',
        checkPass: '',
        telnum: '153****33'
      }
    },
    // 登录验证
    telyanZheng () {
      // 获取到radiotyoe--传递给后端

    },
    // 重置密码--获取验证码
    huoqucode (rule) {
      debugger
      this.$refs[rule].validateField('telnum', (phonevalid) => {
        debugger
        if (!phonevalid) {
          this.time = 60
          this.disabled = true
          this.timer()
        } else {
          return false
        }
      })
      if (!this[rule].telnum) {
        console.log(this.$refs[rule])
        this.$refs[rule].validateField('telnum')
      } else {

      }
    },
    // 倒计时是60s
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
    // 更换手机1
    oldtelSubmit (valid) {
      this.$refs[valid].validate((valid) => {
        if (valid) {
          // 重置身份证-成功
          this.stepactive += 1
        } else {
          return false
        }
      })
    },
    // 更换手机2
    newtelSubmit (valid) {
      this.$refs[valid].validate((valid) => {
        if (valid) {
          // 重置身份证-成功
          this.stepactive += 1
        } else {
          return false
        }
      })
    },
    // 重置密码-提交按钮
    pswSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 重置密码成功-基本信息
          this.indexactive = 1
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .accout-top-title{
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    margin-left: 40px;

  }
  .accout-top-wrap{
    background: #fff;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    .header-radius{
     box-shadow: 0px 6px 16px 0px rgb(0 0 0 / 10%), 0px 9px 28px 8px rgb(0 0 0 / 5%);
     border-radius: 30px;
     height: 60px;
     padding-top: 10px;
    }
  }
  .accoutma-title{
      height: 20px;
      position: absolute;
      margin: 0 auto;
      left: 20%;
      top:165px;
      font-weight: 700;
  }
  .all-content{
    width: 80%;
    margin: 0 auto;
    margin-top: 90px;

  }
  .accoutma-content{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-left: 28px;

  }
  .everyborder{
    border: 1px solid #D6D7DC;

  }
  .accoutma-first{
    margin-left: 40%;

  }
  .accout-f-con{
    line-height: 55px;
    .spanpri{
      font-weight: 400;
      color: #000000;
      line-height: 25px;
      padding-right: 20px;
      text-align: right;

    }
    .text-red{
      color: #FE748B;
      line-height: 25px;
      padding-right: 20px;
    }
  }
  // 登录记录
  .denglv-record-content{
    height: 40px;
    background: #F4F6F4;
    border-radius: 5px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 20px;
  }

  // 登录验证
   .telnumContent{
      width: 700px;
      padding-top: 40px;
      margin: 0 auto;
  }
  .accoutma-choose{
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;

  }
  .accoutmaContent{
      width: 400px;
      padding-top: 40px;
      margin: 0 auto;
  }
  .accoutma-button{
    text-align: center;
  }
  .resetSuccess{
       width: 80px;
       height: 80px;
  }
  .forgetText{
   font-weight: 400;
   color: #2A54CC;
   padding-left: 60px;
  }
.huoqu-btn{
  position: absolute;
  right: 5px;

}
.huoqu-btn span{
  display: inline-block;
  color: #7090FD;
  padding: 0 5px;
}
.codevalide-text{
  position: absolute;
  right: -125px;
  color: #7090FD;
  cursor: pointer;
}
</style>
