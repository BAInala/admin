<template>
  <div class="vieworderdetail-content">
    <p class="f700">售后详情</p>
    <div class="m-t-50">
      <!-- 售后数据 -->
      <div>
        <span class="line"></span>
        <span class="f700 p-l-10">退款申请单</span>
      </div>

      <div class="shouhou-content">
        <div
          style="width:95%;margin: 0 auto;
    margin-top: 21px;
}"
        >
          <el-col :span="12" class="tuikancontent">
            <div>
              <span>订单编号</span>
              <span class="p-l-20">{{ getprops.orderNo }}</span>
              <span class="p-l-20 fuzhicopy">复制</span>
            </div>
            <div>
              <span>售后类型</span>
              <span class="p-l-20">{{ getprops.shouhouType }}</span>
            </div>
            <div>
              <span>发货状态</span>
              <span class="p-l-20">{{ getprops.fahuoStatus }}</span>
            </div>
            <div>
              <span>退款金额</span>
              <span class="p-l-20">{{ getprops.refundMoney }}</span>
              <span class="p-l-20 fuzhicopy"
                >(售后件数: {{ getprops.shouhouNum }})</span
              >
            </div>
            <div>
              <span>退款原因</span>
              <span class="p-l-20">{{ getprops.reason }}</span>
            </div>
            <div>
              <span>发货物流公司</span>
              <span class="p-l-20">{{ getprops.logsticCom }}</span>
            </div>

            <div>
              <span>发货快递单号</span>
              <span class="p-l-20">{{ getprops.logsticCode }}</span>
            </div>
          </el-col>
          <el-col :span="12" class="tuikancontent last-content">
            <div>
              <span>下单时间</span>
              <span class="p-l-20">{{ getprops.orderNo }}</span>
            </div>
            <div>
              <span>申请时间</span>
              <span class="p-l-20">{{ getprops.orderNo }}</span>
            </div>
            <div>
              <span>运费险</span>//已出单 (预计补贴金额9元)
              <span class="p-l-20 fuzhicopy"
                >(已出单 预计补贴金额 {{ getprops.butieMoney }} 元)</span
              >
            </div>
            <div
              style="
                height: 90px;
                background: #f4f6f4;
                border: 1px solid #e0e0e0;
              "
            >
              <el-col :span="6">
                <el-image style="width: 60px" :src="getprops.url"></el-image>
              </el-col>
              <el-col :span="18">
                <p
                  style="
                    margin-left: 10px;
                    color: #7090fd;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  {{ getprops.info }}
                </p>
                <p style="margin-left: 10px; color: #999">
                  ID:{{ getprops.id }}
                </p>
                <p style="margin-left: 10px；font-weight:700;color:#000">
                  {{ getprops.name }}
                  <span class="f-size p-l-50">共一件商品</span>
                  <span class="f-size">实收：</span>
                  <span class="f-size">￥ {{ getprops.actualMoney }}</span>
                </p>
              </el-col>
            </div>
            <div>
              <span>收件人：</span>
              <span class="p-l-20">{{ getprops.shoujianPerson }}</span>
            </div>
            <div>
              <span>收货地址：</span>
              <span class="p-l-20">{{ getprops.address }}</span>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 物流信息 -->
      <div class="wuliu-content m-t-50">
        <el-col :span="12">
          <div class="vieworderDetail-first">
            <span class="line"></span>
            <span class="f700 p-l-10">物流信息</span>
          </div>
          <!-- 具体物流详情
           -->
          <div class="detailwuliu-content">
            <div class="p-t-20 p-l-10">
              <span class="f700">快递公司</span>
              <span class="p-l-20 ccf">{{ getprops.logsticCom }}</span>
              <span class="f700 p-l-20">快递单号</span>
              <span class="p-l-50 ccf">{{ getprops.logsticCode }}</span>
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

        <!-- 备注
         -->
        <el-col :span="11" :offset="1">
          <div class="vieworderDetail-first">
            <span class="line"></span>
            <span class="f700 p-l-10">订单备注</span>
            <span class="f-size"
              >(订单备注由商家添加，仅平台客服和商家可见)</span
            >
          </div>
          <div class="detailwuliu-content">
            <div style="text-align: center; margin-top: 200px">
              <el-button type="primary" @click="viewOrderdetailaddremark"
                >添加备注</el-button
              >
            </div>
          </div>
        </el-col>
      </div>

      <!-- 售后状态 -->
      <div class="m-t-50">
        <!-- 售后数据 -->
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">售后状态</span>
        </div>
        <div v-if="maijiaStatus == 1" class="wuliu-shouhouStatus m-t-20">
          <el-col :span="18">
            <div class="p-40-10 ccf">买家申请退货，待商家处理</div>

            <div class="p-t-50">
              <p class="p-10">同意退货：进入退货流程，等待卖家发货</p>
              <p class="p-10">
                同意退款：退款申请达成，并直接退款到买家的支付宝或微信钱包
              </p>
              <p class="p-10">
                驳回退款：驳回后买家有七天时间，可选择修改申请或申请平台介入
              </p>
              <p class="p-10">
                如果商家未处理：超过
                <span class="ccf"> {{ overdata }} </span>
                则申请达成并自动为买家退款
              </p>
              <p class="p-10">
                <el-button type="primary" @click="agreeTuihuo"
                  >同意退货</el-button
                >
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <p class="f700 p-40-10">其他操作</p>

            <span class="b-tbn p-40-10" @click="agreeRefund">同意退款</span>
            <span class="b-tbn p-40-10" @click="refuseRefund">驳回退款</span>
          </el-col>
        </div>

        <!-- 同意退货 -->
        <div v-if="maijiaStatus == 2" class="wuliu-shouhouStatus m-t-20">
          <el-col :span="18">
            <div class="p-40-10 ccf">等待买家发货</div>

            <div class="p-t-50">
              <p class="p-10">
                买家有七天时间完成发货，若超时未发货此次退款申请关闭，退款失败。
              </p>
              <p class="p-10">
                同意退款：退款申请达成，并直接退款到买家的支付宝或微信钱包
              </p>
              <p class="p-10">
                <el-button type="primary" @click="agreeRefund"
                  >同意退款</el-button
                >
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <p class="f700 p-40-10">其他操作</p>
            <p class="p-10">
                <el-button type="primary" @click="maijiaFahuo()"
                  >买家发货</el-button
                >
              </p>

          </el-col>
        </div>

        <!-- 买家发货了 -->
        <div v-if="maijiaStatus == 3" class="wuliu-shouhouStatus m-t-20">
          <el-col :span="18">
            <div class="p-40-10 ccf">买家已发货，待商家处理</div>

            <div class="p-t-50">
              <p class="p-10">
                同意退款：退款申请达成，并直接退款到买家的支付宝或微信钱包
              </p>
              <p class="p-10">驳回退款：驳回后买家有七天时间，可选择修改申请或申请平台介入</p>
              <p class="p-10">
                如果商家未处理：超过
                <span class="ccf"> {{ overdata }} </span>
                  则申请达成并自动为买家退款
              </p>
               <p class="p-10">
                <el-button type="primary" @click="agreeRefund"
                  >同意退款</el-button
                >
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <p class="f700 p-40-10">其他操作</p>
            <span class="b-tbn p-40-10" @click="refuseRefund">驳回退款</span>
          </el-col>
        </div>

        <!-- 拒绝退货 -->
        <div v-if="maijiaStatus == 4" class="wuliu-shouhouStatus m-t-20">
          <el-col :span="18">
            <div class="p-40-10 ccf">卖家驳回退货，待买家处理</div>

            <div class="p-t-50">
              <p class="p-10">
                驳回后买家有七天时间，可选择修改申请或申请平台介入
              </p>
              <p class="p-10">若超时未处理，此次退款申请关闭，退款失败。</p>
              <p class="p-10">
                同意退款：退款申请达成，并直接退款到买家的支付宝或微信钱包
              </p>
               <p class="p-10">
                <el-button type="primary" @click="agreeRefund"
                  >同意退款</el-button
                >
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <p class="f700 p-40-10">其他操作</p>
          </el-col>
        </div>

        <!-- 同意退款后 就是退款成功 -->
         <div v-if="maijiaStatus == 8" class="wuliu-shouhouStatus m-t-20">
          <el-col :span="18">
            <div class="p-40-10 ccf">退款成功，交易结束</div>

            <div class="p-t-50">
              <p class="p-10">
                退款已到达买家的支付宝或微信钱包
              </p>

            </div>
          </el-col>
          <el-col :span="6">
            <p class="f700 p-40-10">其他操作</p>
          </el-col>
        </div>
      </div>

      <!-- 协商详情 -->
      <div class="m-t-50">
        <!-- 协商详情 -->
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">协商详情</span>
        </div>
        <div class="wuliu-shouhouStatus m-t-20" style="background: #f4f6f4">
          <!-- 买家申请 -->
          <el-col :span="8"  v-if="maijiaStatus != 8">
            <el-col :span="18">
              <div class="p-t-20 p-l-10">2021-01-19 08:45:56</div>
              <div>
                <p class="p-40-10 c6">
                  <i class="el-icon-user"></i>
                  <span class="f700 p-l-20">买家申请退货</span>
                </p>

                <p class="p-10 c6">退款金额：{{ getprops.actualMoney }}</p>
                <p class="p-10 c6">问题描述为：{{ getprops.reason }}</p>
                <p class="p-10 c6">电话号码：145*******754</p>
                <p class="p-10 c6">退款原因：{{ getprops.reason }}</p>
              </div>
            </el-col>
            <el-col :span="6" style="margin-top: 170px">
              <span class="circle-span mainbcg m-l-10"></span>
              <span class="circle-span m-l-10"></span>
              <span class="circle-span m-l-10"></span>
            </el-col>
          </el-col>

          <!-- 同意退货 -->
          <el-col :span="8" v-if="maijiaStatus == 2 || maijiaStatus == 3">
            <el-col :span="18">
              <div class="p-t-20 p-l-10">2021-01-19 08:45:56</div>
              <div>
                <p class="p-40-10 c6">
                  <i class="el-icon-s-check"></i>
                  <span class="f700 p-l-20">卖家同意退货</span>
                </p>

                <p class="p-10 c6">卖家同意退货</p>
              </div>
            </el-col>
            <el-col :span="6" style="margin-top: 170px">
              <span class="circle-span mainbcg m-l-10"></span>
              <span class="circle-span m-l-10"></span>
              <span class="circle-span m-l-10"></span>
            </el-col>
          </el-col>

          <!-- 买家已发货 -->
           <el-col :span="8" v-if="maijiaStatus == 3">
            <el-col :span="18">
              <div class="p-t-20 p-l-10">2021-01-19 08:45:56</div>
              <div>
                <p class="p-40-10 c6">
                  <i class="el-icon-user"></i>
                  <span class="f700 p-l-20">买家已发货</span>
                </p>

                <p class="p-10 c6">退货包裹物流公司：{{getprops.logsticCom}} </p>
                <p class="p-10 c6">退货运单号：{{getprops.logsticCode}}
                  <span class="b-tbn">复制</span>
                </p>
              </div>
            </el-col>
            <el-col :span="6" style="margin-top: 170px">
              <span class="circle-span mainbcg m-l-10"></span>
              <span class="circle-span m-l-10"></span>
              <span class="circle-span m-l-10"></span>
            </el-col>
          </el-col>

          <!-- 买家拒绝 -->
          <el-col :span="8" v-if="maijiaStatus == 4">
            <el-col :span="18">
              <div class="p-t-20 p-l-10">2021-01-19 08:45:56</div>
              <div>
                <p class="p-40-10 c6">
                  <i class="el-icon-s-check"></i>
                  <span class="f700 p-l-20">卖家驳回退货</span>
                </p>

                <p class="p-10 c6">卖家驳回退货</p>
              </div>
            </el-col>
            <el-col :span="6" style="margin-top: 170px">
              <span class="circle-span mainbcg m-l-10"></span>
              <span class="circle-span m-l-10"></span>
              <span class="circle-span m-l-10"></span>
            </el-col>
          </el-col>

          <!-- 退款成功 交易结束 -->
          <el-col :span="8" v-if="maijiaStatus == 8">
            <el-col :span="18">
              <div class="p-t-20 p-l-10">2021-01-19 08:45:56</div>
              <div>
                <p class="p-40-10 c6">
                  <i class="el-icon-s-check"></i>
                  <span class="f700 p-l-20">退货退款成功</span>
                </p>

                 <p class="p-10 c6">退款金额：{{ getprops.actualMoney }}</p>
                <p class="p-10 c6">退款成功，交易结束 </p>
              </div>
            </el-col>
          </el-col>

        </div>
      </div>

      <!-- 聊天记录 -->
      <div class="m-t-50">
        <!-- 聊天记录 -->
        <div style="height: 24px">
          <el-col :span="12">
            <span class="line"></span>
            <span class="f700 p-l-10">聊天记录</span>
          </el-col>
          <el-col :span="3" :offset="8">
            <span class="b-tbn">联系买家</span>
          </el-col>
        </div>

        <div
          class="m-t-20"
          style="border: 1px solid #d6d7dc; min-height: 300px"
        >
          <el-col class="chat-first">
            <i class="el-icon-user"></i>
            <span class="p-l-20">我要退货</span>
          </el-col>
          <el-col class="chat-second">
            <i class="el-icon-s-check"></i>
            <span class="p-l-20"
              >亲可以进入订单页面，找到需要退款的订单，点击“申请退款”，正确选择您的“退款原因”并给予说明或举证，退款专员会尽快审核处理，退款申请通过后页面会显示退货地址哦~</span
            >
          </el-col>
          <el-col class="chat-first">
            <i class="el-icon-user"></i>
            <span class="p-l-20">嗯嗯嗯</span>
          </el-col>
          <el-col class="chat-second">
            <i class="el-icon-s-check"></i>
            <span class="p-l-20">有什么要帮助的吗</span>
          </el-col>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
      tName: '1',
      numName: '1',
      data: '2021-05-21 11:30',
      notdata: '2021-05-23 09:30',
      total: {
        time: 0.1,
        yesterday: '0.00%'
      },
      activeClass: 0, // 0为默认选择第一个，-1为不选择
      goodsName: '',
      viewMore: '查看更多',
      viewMoreflag: false,
      orderForm: {
        aftersaletype: '',
        status: '',
        reason: '',
        fahuoStatus: '',
        operateStatus: '',
        money1: '',
        money2: '',
        refuse: '',
        time: ''
      },
      datalist: {
        total: 2,
        alldata: [
          {
            orderNo: '12345689742',
            name: '2222',
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
            reason: '我不想要了'
          },
          {
            orderNo: '02134433',
            name: '牛奶',
            id: 2,
            info: '圣牧牛奶',
            buyname: '小小黄鸭',
            url:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            actualMoney: '1500',
            refundMoney: '50',
            orderDate: '2021-05-22 11：08',
            orderCode: '',
            fahuoStatus: '未发货',
            shouhouType: '退款',
            shouhouStatus: '退款成功',
            reason: '七天无理由'
          }
        ]
      },
      getprops: {},
      datelistSort: '1',
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)],
      overdata: '01 天  23 : 58 : 46 ',
      maijiaStatus: 1, // 1  买家申请退货   2:卖家同意退货  4 卖家拒绝退货  8:同意退款
      dialogFormVisible: false,
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
      form: {
        name: '',
        region: ''
      },
      formLabelWidth: '100px'
    }
  },
  created () {
    debugger
    console.log(this)
    this.getprops = JSON.parse(this.$route.query.data) // 接受参数关键代码
    console.log(this.getprops)
  },
  methods: {
    viewOrderdetailaddremark () {
      this.dialogFormVisible = true
    },
    addRemarks () {
      this.dialogFormVisible = false
      alert('哈哈哈')
    },
    maijiaFahuo () {
      this.maijiaStatus = 3 // 买家已经发货了 todo 这个是后端给的
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
  mounted () {
  }
}
</script>

<style  lang="scss">
.vieworderdetail-content {
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
  .chat-first {
    line-height: 48px;
    background: #f4f6f4;
  }
  .chat-second {
    line-height: 48px;
  }
}
</style>
