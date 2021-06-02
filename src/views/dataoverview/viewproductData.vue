<template>
  <div class="viewProductdetail-content">
    <p class="f700">订单详情</p>
    <div class="m-t-50">
      <!-- 订单信息 -->
      <div style="height: 100px;padding:20px">
        <el-col :span="6" class="xianParent">
          <span class="circle"></span>
          <span class="p-l-10 maincolor">提交订单</span>
          <p class="c9 p-t-20">2021-06-07 13:50:08</p>
          <div class="xian"></div>
        </el-col>
        <el-col :span="6" class="xianParent">
          <span class="circle"></span>
           <span class="p-l-10 maincolor">付款成功</span>
          <p class="c9 p-t-20">2021-06-09 11:50:08</p>
          <div class="xian"></div>
        </el-col>
        <el-col :span="6" class="xianParent">
             <span class="circle"></span>
              <span class="p-l-10 maincolor">已发货</span>
          <p class="c9 p-t-20">2021-06-10 09:50:08</p>
          <div class="xian bg9"></div>
        </el-col>
        <el-col :span="6" class="xianParent">
             <span class="circle bg9"></span>
              <span class="p-l-10 c9">等待签收</span>
          <!-- <p class="c9 p-t-20">2021-06-11 11:20:01</p> -->
          <!-- <div class="xian"></div> -->
        </el-col>
      </div>
      <div>
        <!-- 订单信息 -->

        <div style="height: 50px; line-height: 50px">
          <el-col :span="2">
            <div>
              <span class="line"></span>
              <span class="f700 p-l-10">订单信息</span>
            </div>
          </el-col>
          <el-col :span="8">
            <span class="p-l-50">订单编号：</span>

            {{ alldata[0].orderNo }}
            <el-button type="text" class="fuzhicopy">复制</el-button>
          </el-col>
        </div>

        <!-- 遍历的表格 -->
        <div class="bianhao-allconntent">
          <el-table
            :data="alldata"
            border
            :header-cell-style="{ background: '#F4F6F4 !important' }"
            style="width: 100%"
          >
            <el-table-column label="商品信息" width="300">
              <template #default="scope">
                <el-col :span="12">
                  <el-image style="width: 80px" :src="scope.row.url"></el-image>
                </el-col>
                <el-col :span="12">
                  <p
                    style="
                      margin-left: 10px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    "
                  >
                    {{ scope.row.info }}
                  </p>
                  <p style="margin-left: 10px; color: #999">
                    ID:{{ scope.row.id }}
                  </p>
                  <el-button
                    size="mini"
                    type="text"
                    class="shubiaoCustor"
                    @click="fastPhoto(scope.$index, scope.row)"
                    >商品快照</el-button
                  >
                </el-col>
              </template>
            </el-table-column>
            <el-table-column prop="spec" label="规格"> </el-table-column>
            <el-table-column prop="actualMoney" label="商品单价（元）">
            </el-table-column>
            <el-table-column prop="num" label="商品数量（件）">
            </el-table-column>
            <el-table-column prop="refundMoney" label="商品总价（元）">
            </el-table-column>
            <el-table-column label="店铺优惠抵扣（元）">
              <template #default="scope">
                <p style="margin-left: 10px">
                  青宝币抵扣: {{ scope.row.actualMoney }}
                </p>
              </template>
            </el-table-column>
            <el-table-column label="商家实收金额（元）">
              <template #default="scope">
                <p style="margin-left: 10px">
                  {{ scope.row.actualMoney }}
                </p>
                <p style="margin-left: 10px">
                  （含配送费：{{ scope.row.refundMoney }})
                </p>
                <p style="margin-left: 10px">
                  （含平台优惠劵：{{ scope.row.refundMoney }})
                </p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 收件人信息 -->
      <div class="m-t-50">
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">收件人信息</span>
          </el-col>
        </div>

        <div
          class="m-t-20"
          style="border: 1px solid #d6d7dc; min-height: 110px"
        >
          <el-col class="p-t-20">
            <span class="p-l-20 line-28">收件人</span>
            <span class="p-l-20 line-28">孙星星, 189485904385</span>
          </el-col>
          <el-col class="p-t-20">
            <span class="p-l-20 line-28">收货地址</span>
            <span class="p-l-20 line-28">江苏 南通 崇川</span>
          </el-col>
        </div>
      </div>

      <!-- 订单备注 -->
      <div class="m-t-50">
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">订单备注</span>
          </el-col>
        </div>

        <div class="m-t-20" style="border: 1px solid #d6d7dc; height: 110px">
          <div style="text-align: center; line-height: 110px">
            <el-button type="primary" @click="viewOrderdetailaddremark"
              >添加备注</el-button
            >
          </div>
        </div>
      </div>

      <!-- 物流信息 -->
      <div class="m-t-50">
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">物流信息</span>
        </div>
        <div class="wuliu-shouhouStatus m-t-20">
          <el-col
            :span="12"
            style="
              height: 266px;
              margin-top: 30px;
              border-right: 1px solid #d6d7dc;
              padding-right: 50px;
            "
          >
            <div style="text-align: center; padding-top: 60px">
              <p class="p-t-20 line-28">快递公司: 申通</p>
              <p class="p-t-20 line-28">
                快递公司: N0344555
                <span class="shubiaoCustor">复制</span>
              </p>
              <div class="p-t-20">
                <el-button type="primary" @click="editLogisticInfo()"
                  >修改物流信息</el-button
                >
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <!-- 具体物流详情-->
            <div style="padding-left: 50px">
              <div class="p-t-20 p-l-10">
                <span class="f700">快递公司</span>
                <span class="p-l-20 ccf">{{ getData.logsticCom }}</span>
                <span class="f700 p-l-20">快递单号</span>
                <span class="p-l-50 ccf">{{ getData.logsticCode }}</span>
                <div class="vieworderDetail-block">
                  <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in activities"
                      :key="index"
                      :color="activity.color"
                    >
                      {{ activity.content }}
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 退货人信息 -->
      <div class="m-t-50">
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">退货地址信息</span>
          </el-col>
        </div>

        <div
          class="m-t-20"
          style="border: 1px solid #d6d7dc; min-height: 110px"
        >
          <el-col class="p-t-20">
            <span class="p-l-20 line-28">收件人</span>
            <span class="p-l-20 line-28">孙星星, 189485904385</span>
          </el-col>
          <el-col class="p-t-20">
            <span class="p-l-20 line-28">收货地址</span>
            <span class="p-l-20 line-28">江苏 南通 崇川</span>
          </el-col>
        </div>
      </div>

      <!-- 服务信息 -->
      <div class="m-t-50">
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">服务信息</span>
          </el-col>
        </div>

        <div
          class="m-t-20"
          style="border: 1px solid #d6d7dc; min-height: 160px"
        >
          <div class="p-t-20" style="text-align: center; color: #333333">
            <el-col :span="8">
              <span class="p-l-20 line-28 inline">只换不修</span>
              <span class="p-l-20 line-28">不支持</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">全国联保</span>
              <span class="p-l-20 line-28">否</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">退货包运费</span>
              <span class="p-l-20 line-28">不支持</span>
            </el-col>
          </div>
          <div class="p-t-40" style="text-align: center; color: #333333">
            <el-col :span="8">
              <span class="p-l-20 line-28 inline">是否顺丰包邮</span>
              <span class="p-l-20 line-28">否</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">送货入户</span>
              <span class="p-l-20 line-28">否</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">缺重包退</span>
              <span class="p-l-20 line-28">不支持</span>
            </el-col>
          </div>
          <div class="p-t-40" style="text-align: center; color: #333333">
            <el-col :span="8">
              <span class="p-l-20 line-28 inline">坏果包赔</span>
              <span class="p-l-20 line-28">不支持</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">坏了包赔</span>
              <span class="p-l-20 line-28">否</span>
            </el-col>
            <el-col :span="8">
              <span class="p-l-20 line-28">发票状态</span>
              <span class="p-l-20 line-28">未申请</span>
            </el-col>
          </div>
        </div>
      </div>

      <!-- 小额打款补偿 -->
      <div class="m-t-50">
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">小额打款补偿</span>
          </el-col>
        </div>
        <div
          style="
            height: 40px;
            line-height: 40px;
            background: #e8ffea;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            padding: 0 20px;
            margin-top: 20px;
            border-radius: 2px;
            border: 1px solid #e8ffea;
          "
        >
          <p>
            <i class="el-icon-warning" style="color: #52c41a"></i>
            若您与买家之间存在补运费、补差价等小额补偿需求，请使用小额打款功能（单笔订单可小额打款3次）。补偿金额以青宝币代替。
          </p>
        </div>

        <div class="m-t-20">
          <el-radio-group v-model="qiehuanValue">
            <el-radio-button label="1">打款记录</el-radio-button>
            <el-radio-button label="2">申请管理员打款记录</el-radio-button>
          </el-radio-group>

          <div class="l-right">
            <el-button type="primary" @click="smallDakuan()"
              >小额打款</el-button
            >
          </div>
        </div>

        <div
          class="m-t-20"
          style="border: 1px solid #d6d7dc; min-height: 110px"
        >
          <el-table
            v-if="qiehuanValue == 1"
            :data="record"
            border
            :header-cell-style="{ background: '#F4F6F4 !important' }"
            style="width: 100%"
          >
            <el-table-column prop="type" label="打款类型"> </el-table-column>
            <el-table-column label="打款金额（个）" width="300">
              <template #default="scope">
                <el-col :span="12">
                  <p
                    style="
                      margin-left: 10px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    "
                  >
                    {{ scope.row.money }} 个青宝币
                  </p>
                </el-col>
              </template>
            </el-table-column>
            <el-table-column prop="liuyan" label="给买家留言">
            </el-table-column>
            <el-table-column prop="account" label="操作账户"> </el-table-column>

            <el-table-column label="申请打款时间">
              <template #default="scope">
                <p style="margin-left: 10px">
                  {{ scope.row.applytime }}
                </p>
                <p style="margin-left: 10px">
                  {{ scope.row.applydate }}
                </p>
              </template>
            </el-table-column>
            <el-table-column label="打款成功时间">
              <template #default="scope">
                <p style="margin-left: 10px">
                  {{ scope.row.applytime }}
                </p>
                <p style="margin-left: 10px">
                  {{ scope.row.applydate }}
                </p>
              </template>
            </el-table-column>

            <el-table-column prop="status" label="打款状态"> </el-table-column>
          </el-table>

          <el-table
            v-if="qiehuanValue == 2"
            :data="record"
            border
            :header-cell-style="{ background: '#F4F6F4 !important' }"
            style="width: 100%"
          >
            <el-table-column prop="type" label="打款申请类型">
            </el-table-column>
            <el-table-column label="打款申请时间">
              <template #default="scope">
                <p style="margin-left: 10px">
                  {{ scope.row.applytime }}
                </p>
                <p style="margin-left: 10px">
                  {{ scope.row.applydate }}
                </p>
              </template>
            </el-table-column>
            <el-table-column prop="applyperson" label="申请人">
            </el-table-column>
            <el-table-column prop="liuyan" label="给管理员留言">
            </el-table-column>

            <el-table-column label="打款申请金额" width="300">
              <template #default="scope">
                <el-col :span="12">
                  <p
                    style="
                      margin-left: 10px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    "
                  >
                    {{ scope.row.money }} 个青宝币
                  </p>
                </el-col>
              </template>
            </el-table-column>

            <el-table-column label="打款成功时间">
              <template #default="scope">
                <p style="margin-left: 10px">
                  {{ scope.row.applytime }}
                </p>
                <p style="margin-left: 10px">
                  {{ scope.row.applydate }}
                </p>
              </template>
            </el-table-column>

            <el-table-column prop="status" label="管理员出来结果">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <!-- 添加备注 -->
    <el-dialog
      title="添加备注"
      customClass="customWidth"
      v-if="dialogFormVisible"
      v-model="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addRemarks()">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 小额打款的弹框 -->
    <el-dialog
      :title="qiehuanValue == 1 ? '打款申请' : '提交打款申请给店铺管理员'"
      v-model="smallFormVisible"
      @close="closesmallDialog()"
    >
      <el-form :model="smallform" :label-width="formLabelWidth">
        <div style="margin-top: 20px">
          <el-form-item
            :label="qiehuanValue == 1 ? '打款类型' : '申请打款类型'"
          >
            <el-radio-group v-model="smallform.radio" size="medium">
              <el-radio label="1" border>补差价</el-radio>
              <el-radio label="2" border>补运费</el-radio>
              <el-radio label="3" border>其他</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item :label="qiehuanValue == 1 ? '打款金额' : '申请打款金额'">
          <el-col :span="16">
            <el-input
              v-model="smallform.num"
              type="number"
              autocomplete="off"
              placeholder="每次上限200个青宝币"
            ></el-input>
          </el-col>
          <el-col :span="4" :offset="1">
            <p class="size-12">最多可打款三次</p>
          </el-col>
        </el-form-item>
        <el-form-item
          :label="qiehuanValue == 1 ? '给买家留言' : '给管理员留言'"
        >
          <el-input type="textarea" v-model="smallform.desc"></el-input>
        </el-form-item>

        <!--  -->
        <div
          v-show="qiehuanValue == 1"
          class="tips shubiaoCustor"
          style="margin-left: 120px"
        >
          <p>无管理员权限?</p>
          <p @click="makeAdminchange()">点此提交打款申请给店铺管理员?</p>
        </div>
        <div v-show="qiehuanValue == 2" class="tips" style="margin-left: 300px">
          <p>1. 店铺管理员可在左侧导航栏【售后管理】—【小额打款】中处理申请</p>
          <p>2. 实际打款结果请以“打款记录”为准?</p>
        </div>
      </el-form>
      <template #footer>
        <div style="text-align: center !important">
          <span class="dialog-footer">
            <el-button type="primary" @click="dakunSubmit()">确 定</el-button>
            <el-button @click="smallFormVisible = false">取 消</el-button>
          </span>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alldata: [
        {
          orderNo: '12345689742',
          name: '洗发水',
          spec: '500ml',
          num: 3,
          id: 1,
          info: '222十四是哈哈哈',
          buyname: '买家1',
          url:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          actualMoney: '500',
          refundMoney: '100',
          orderDate: '2021-05-22 11：08',
          orderCode: 'ST358328543',
          fahuoStatus: '已发货',
          shouhouType: '退货退款',
          shouhouStatus: '退货退款成功',
          shouhouNum: 2,
          reason: '我不想要了',
          logsticCom: '圆通快递',
          logsticCode: 'ST743822',
          address: '江苏南通',
          shoujianPerson: '收件人1111',
          butieMoney: 19
        }
      ],
      record: [
        {
          type: '补差价',
          money: '5',
          liuyan: '我是留言很多很多',
          account: '1839257',
          status: '成功',
          applytime: '09:44',
          applydate: '2020.06.11',
          applyperson: '小天',
          num: 3,
          id: 1,
          info: '222十四是哈哈哈',
          buyname: '买家1',
          actualMoney: '500',
          refundMoney: '100',
          orderDate: '2021-05-22 11：08',
          orderCode: 'ST358328543',
          fahuoStatus: '已发货',
          shouhouType: '退货退款',
          shouhouStatus: '退货退款成功',
          shouhouNum: 2,
          reason: '我不想要了',
          logsticCom: '圆通快递',
          logsticCode: 'ST743822',
          address: '江苏南通',
          shoujianPerson: '收件人1111',
          butieMoney: 19
        }
      ],
      qiehuanValue: 1,
      getIndex: '',
      getData: {},
      activities: [
        {
          content:
            '快件已存放至【自提柜】请及时取件。有问题请联系派件员18217715574',
          color: '#21CA2E'
        },
        {
          content: '派送中'
        },
        {
          content: '到达哪里了.....'
        },
        {
          content: '运输中'
        },
        {
          content: '快递已发出'
        }
      ],
      dialogFormVisible: false, // 备注弹框出现的条件
      form: {
        // 提交备注
        name: '',
        region: ''
      },
      formLabelWidth: '100px',
      smallFormVisible: false, // 小额打款弹框出现的条件
      smallFormTile: {
        title: '小额打款',
        type: '打款类型',
        numtype: '打款金额',
        remarktype: '给买家留言'
      },
      smallform: {
        // 提交小额打款
        radio: '1',
        desc: '',
        num: ''
      }
    }
  },
  created () {
    console.log(this)
    this.getIndex = JSON.parse(this.$route.query.index) // 接受参数关键代码
    console.log(this.getData)
  },

  computed: {},
  methods: {
    viewOrderdetailaddremark () {
      this.dialogFormVisible = true
    },
    editLogisticInfo () {
      this.dialogFormVisible = false
      alert('哈哈哈')
    },
    addRemarks () {
      this.dialogFormVisible = false
      alert('哈哈哈')
    },
    smallDakuan () {
      // 小额打款弹框出现
      this.smallFormVisible = true
    },
    dakunSubmit () {
      this.smallFormVisible = false
      console.log(this.smallform)
    },
    closesmallDialog () {
      this.smallform = {
        // 提交小额打款
        radio: '1',
        desc: '',
        num: ''
      }
    },
    makeAdminchange () {
      this.qiehuanValue = 2
      // 调接口
    },
    agreeTuihuo () {
      // 同意退货
      this.$confirm('确定同意退货吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // type: 'warning'
      })
        .then(() => {
          // todo 调接口
          this.maijiaStatus = 2 // 同意退货
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {})
    },
    agreeRefund () {
      // 同意退款
      this.$confirm('确定同意退款吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // type: 'warning'
      })
        .then(() => {
          // todo 调接口
          this.maijiaStatus = 8
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {})
    },
    refuseRefund () {
      // 驳回退款
      this.$confirm('确定驳回退款吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // type: 'warning'
      })
        .then(() => {
          // todo 调接口
          this.maijiaStatus = 4
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {})
    }
  },
  mounted () {}
}
</script>

<style  lang="scss" scoped>
.viewProductdetail-content {
  padding: 10px 10px 200px 10px;
  background: #fff;
  .line {
    display: inline-block;
    width: 2px;
    height: 15px;
    background: #21ca2e;
  }
  .timeSmall {
    color: #999999;
    font-size: 12px;
  }
  .timeSmall21 {
    color: #21ca2e;
    font-size: 12px;
  }
  .shouhou-content {
    // width: 80%;
    margin: 20px auto;
    height: 350px;
    border: 1px solid #d6d7dc;
  }
  .wuliu-shouhouStatus {
    height: 330px;
    border: 1px solid #d6d7dc;
  }
  .fuzhicopy {
    color: #7090fd;
    cursor: pointer;
  }
  .shubiaoCustor {
    color: #7090fd;
    cursor: pointer !important;
  }
  .tuikancontent {
    padding-left: 8%;
    padding-top: 20px;
    border-right: 1px solid #d6d7dc;
    div {
      padding: 8px;
    }
  }
  .last-content {
    border-right: none;
  }
  .f-size {
    font-size: 13px;
  }
  .vieworderDetail-first {
    padding: 20px 3px;
  }
  .wuliu-content {
    height: 500px;
  }
  .detailwuliu-content {
    height: 410px;
    border: 1px solid #d6d7dc;
  }
  .ccf {
    color: #fe748b;
  }
  .vieworderDetail-block {
    padding: 20px 10px;
  }
  .customWidth {
    width: 30% !important;
  }
  .b-tbn {
    display: inline-block;
    color: #7090fd;
    line-height: 25px;
    cursor: pointer;
  }
  .circle-span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d6d7dc;
  }
  .circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #21ca2e;
  }

  .xianParent {
    position: relative;
  }
  .xian {
    position: absolute;
    width: 180px;
    height: 2px;
    background: #21ca2e;
    left: 100px;
    top: 9px;
  }
    .bg9{
      background: #999;
  }
}
</style>
