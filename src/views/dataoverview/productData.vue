<template>
  <div class="Productlist-content">
    <p class="f700">订单查询</p>
    <div class="m-t-50">
      <el-button @click="viewData($index)">查看详情</el-button>
      <div class="hhcontainer">
        <div class="div"  >我是一个div</div>
        <div class="div hh"  >我是一个很多字div</div>
        <div class="div"  >我是一个更多字而且第三个div</div>
      </div>

      <div class="p-10">
        <el-tabs v-model="activeName" :before-leave="jiaoyileaveTab">
          <el-tab-pane label="近3个月订单" name="1" :key="1"></el-tab-pane>
          <el-tab-pane label="3个月前订单" name="2" :key="2"></el-tab-pane>
        </el-tabs>
      </div>

      <!-- 订单状态 展示更多 -->
      <div class="fastfindtagsSearch m-t-20" style="min-height: 60px">
        <el-row class="p-t-10">
          <span class="find-tiaojianText">订单状态：</span>
          <el-col :span="2">
            <div
              class="find-tiaojian"
              @click="setCenter(0)"
              :class="activeClass == 0 ? 'active' : ''"
            >
              全部
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(1)"
              :class="activeClass == 1 ? 'active' : ''"
            >
              待支付
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(2)"
              :class="activeClass == 2 ? 'active' : ''"
            >
              待发货
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(3)"
              :class="activeClass == 3 ? 'active' : ''"
            >
              待签收
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(4)"
              :class="activeClass == 4 ? 'active' : ''"
            >
              已签收
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(5)"
              :class="activeClass == 5 ? 'active' : ''"
            >
              即将延迟发货
            </div>
          </el-col>
          <el-col :span="2">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(6)"
              :class="activeClass == 6 ? 'active' : ''"
            >
              已延迟发货
            </div>
          </el-col>
        </el-row>
        <!-- 具体的搜素条件 -->
        <div class="orderappeal-search" v-show="!!viewMoreflag">
          <el-form
            ref="orderappeal-form"
            :model="orderForm"
            label-width="120px"
            label-position="right"
            class="p-t-40"
          >
            <el-col :span="8">
              <el-form-item label="订单编号">
                <el-input
                  v-model="orderForm.orderNo"
                  placeholder="请输入订单编号"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="商品ID">
                <el-input
                  v-model="orderForm.orderId"
                  placeholder="请输入商品ID"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="售后状态">
                <el-select
                  v-model="orderForm.shouhouStatus"
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in optionsStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收件姓名">
                <el-input
                  v-model="orderForm.name"
                  placeholder="请输入收件人姓名"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收货手机">
                <el-input
                  v-model="orderForm.telnum"
                  placeholder="请输入完整手机号码"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="快递单号">
                <el-input
                  v-model="orderForm.code"
                  placeholder="请输入快递单号"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="承诺发货时间">
                <el-select
                  v-model="orderForm.refuse"
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in operateRefuse"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="下单时间">
                <el-date-picker
                  v-model="orderForm.time"
                  type="datetimerange"
                  :shortcuts="shortcuts"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="defaultTime1"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="6" :offset="10" class="m-t-20">
              <el-button type="primary" @click="searchParamsget()"
                >查询</el-button
              >
              <el-button @click="searchRest('orderappeal-form')"
                >重置</el-button
              >
            </el-col>
          </el-form>
        </div>

        <!-- 查看更多 -->
        <!-- <div class="viewmore-btn">
          <el-button type="text" @click="searchText()">{{
            viewMore
          }}</el-button>
        </div> -->
      </div>

      <!-- table -->
      <div class="orderappeal-searchContent p-t-20">
        <div style="margin-bottom: 40px">
          <span>共查询到</span>
          <span class="maincolor">{{ datalist.total }}</span>
          <span>条数据</span>

          <el-select
            v-model="datelistSort"
            placeholder="请选择"
            style="margin-left: 90px"
          >
            <el-option
              v-for="item in dateoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <template v-if="datalist.alldata.length > 0">
          <div v-for="item in datalist.alldata" :key="item.id">
            <div class="bianhao-height">
              <el-col :span="8">
                <span class="p-l-50">订单编号：</span>

                {{ item.orderNo }}
                <el-button type="text" class="fuzhicopy">复制</el-button>
              </el-col>
              <el-col :span="6" :offset="10">
                申请时间：
                {{ item.orderDate }}
              </el-col>
            </div>

            <!-- 遍历的表格 -->
            <div class="bianhao-allconntent">
              <el-table
                :data="[item]"
                border
                :header-cell-style="{ background: '#F4F6F4 !important' }"
                style="width: 100%"
              >
                <el-table-column label="商品信息" width="200">
                  <template #default="scope">
                    <el-col :span="12">
                      <el-image
                        style="width: 80px"
                        :src="scope.row.url"
                      ></el-image>
                    </el-col>
                    <el-col :span="12">
                      <p
                        style="
                          margin-left: 10px;
                          color: #7090fd;
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
                      <p style="margin-left: 10px；font-weight:700;color:#000">
                        {{ scope.row.name }}
                      </p>
                    </el-col>
                  </template>
                </el-table-column>
                <el-table-column label="买家" prop="name">
                  <template #default="scope">
                    <p style="margin-left: 10px">{{ scope.row.buyname }}</p>
                    <el-button
                      size="mini"
                      type="text"
                      class="shubiaoCustor"
                      @click="takeChat(scope.$index, scope.row)"
                      >发起聊天</el-button
                    >
                  </template>
                </el-table-column>
                <el-table-column label="金额">
                  <template #default="scope">
                    <p style="margin-left: 10px">
                      实收: {{ scope.row.actualMoney }}
                    </p>
                    <p style="margin-left: 10px">
                      退款：{{ scope.row.refundMoney }}
                    </p>
                  </template>
                </el-table-column>
                <el-table-column label="金额">
                  <template #default="scope">
                    <p style="margin-left: 10px">
                      实收: {{ scope.row.actualMoney }}
                    </p>
                    <p style="margin-left: 10px">
                      退款：{{ scope.row.refundMoney }}
                    </p>
                  </template>
                </el-table-column>
                <el-table-column prop="fahuoStatus" label="发货状态">
                </el-table-column>
                <el-table-column prop="shouhouType" label="售后类型">
                </el-table-column>
                <el-table-column prop="shouhouStatus" label="售后状态">
                </el-table-column>
                <el-table-column prop="orderCode" label="退货运单号">
                </el-table-column>
                <el-table-column prop="reason" label="退货原因">
                </el-table-column>
                <el-table-column label="操作">
                  <template #default="scope">
                    <div>
                      <el-button
                        size="mini"
                        type="text"
                        style="color: #7090fd; cursor: pointer"
                        @click="viewDetail(scope.$index, scope.row)"
                        >查看详情</el-button
                      >
                    </div>

                    <el-button
                      size="mini"
                      type="text"
                      style="color: #7090fd; cursor: pointer"
                      @click="handleaddRemark(scope.$index, scope.row)"
                      >添加备注</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </template>
        <template v-else>
          <table class="nodata">
            暂无数据哦
          </table>
        </template>
      </div>
    </div>

    <!-- 添加备注 -->
    <el-dialog
      title="添加备注"
      customClass="customWidth"
      v-if="orderdialogFormVisible"
      v-model="orderdialogFormVisible"
    >
      <el-form :model="remarkform">
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="remarkform.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="orderdialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="ordersureRemarks()"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1',
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
      viewMoreflag: true,
      shortcuts: [
        {
          text: '最近24h',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
            return [start, end]
          })()
        },
        {
          text: '最近一周',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })()
        },
        {
          text: '最近一个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })()
        },
        {
          text: '最近三个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })()
        }
      ],
      orderForm: {
        orderNo: '',
        orderId: '',
        name: '',
        telnum: '',
        code: '',
        aftersaletype: '',
        status: '',
        shouhouStatus: '',
        fahuoStatus: '',
        refuse: '',
        time: ''
      },
      formLabelWidth: '100px',
      orderdialogFormVisible: false,
      remarkform: {
        remark: ''
      },
      datalist: {
        total: 2,
        alldata: [
          {
            orderNo: '12345689742',
            name: '洗发水',
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
            shouhouNum: 0,
            reason: '七天无理由',
            logsticCom: '顺丰快递',
            logsticCode: 'ST70009999',
            address: '江苏苏州',
            shoujianPerson: '我是收件人',
            butieMoney: 88
          }
        ]
      },
      datelistSort: '1',
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)],
      optionsStatus: [
        {
          value: '1',
          label: '全部'
        },
        {
          value: '2',
          label: '售后处理中'
        },
        {
          value: '3',
          label: '退款中'
        },
        {
          value: '4',
          label: '退款成功'
        }
      ],
      operateRefuse: [
        {
          value: '1',
          label: '全部'
        },
        {
          value: '2',
          label: '已过发货时间'
        },
        {
          value: '3',
          label: '12小时内需要发货'
        },
        {
          value: '4',
          label: '今天需要发货'
        },
        {
          value: '5',
          label: '三天内要发货'
        },
        {
          value: '6',
          label: '三天后要发货'
        }
      ],
      dateoptions: [
        {
          value: '1',
          label: '按下单时间排序'
        },
        {
          value: '2',
          label: '正序'
        },
        {
          value: '3',
          label: '倒序'
        }
      ]
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    viewData (index) {
      // 跳转到详情
      this.$router.push({
        // 核心语句
        path: 'viewProduct', // 跳转的路径
        query: {
          // 传递参数
          index: 0
        }
      })
    },
    jiaoyileaveTab (activeName, oldActiveName) {
      // 交易数据的tab
      // 交易概况
      if (activeName === '1') {
        // 新建一个promise对象
        const newPromise = new Promise((resolve) => {
          resolve()
        })
        // 然后异步执行echarts的初始化函数
        newPromise.then(() => {
          this.morenchart('zhifuAll').setOption(this.options)
        })
      }
      // 支付未下单
      if (activeName === '2') {
        const newPromise = new Promise((resolve) => {
          resolve()
        })
        // 然后异步执行echarts的初始化函数
        newPromise.then(() => {})
      }
    },

    setCenter ($index) {
      this.activeClass = $index
    },
    goodsSearch () {
      console.log(this.goodsName)
    },
    searchText () {
      // 查看更多
      this.viewMoreflag = !this.viewMoreflag
    },
    searchParamsget () {
      // 查询
      console.log(this.orderForm) // todo 拿到 调接口
    },
    searchRest (formName) {
      // 重置
      this.$refs[formName].resetFields()
      this.orderForm = {
        aftersaletype: '',
        status: '',
        reason: '',
        fahuoStatus: '',
        orderNo: '',
        orderId: '',
        name: '',
        telnum: '',
        code: '',
        refuse: '',
        time: ''
      }
    },
    viewDetail (index, row) {
      console.log(index, row)
      console.log(JSON.stringify(row))
      this.$router.push({
        // 核心语句
        path: 'vieworderdetaill', // 跳转的路径
        query: {
          // 传递参数
          index,
          data: JSON.stringify(row)
        },
        active: { background: '#ed4' }
      })
    },
    handleaddRemark (index, row) {
      // 添加备注
      console.log(index, row)
      this.orderdialogFormVisible = true
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
        // duration: 100
      })
    },
    ordersureRemarks () {
      // 添加备注-确定按钮
      this.orderdialogFormVisible = false
      this.$message({
        message: '哈哈 我确定',
        type: 'success'
      })
    },
    takeChat (index, row) {
      console.log(index, row)
      this.$message({
        message: '聊天吧',
        type: 'success'
      })
    }
  },
  mounted () {}
}
</script>

<style  lang="scss" scoped>
.hhcontainer{
  display: flex;
  .div{
  border: 1px solid red;
}
// .hh{
//   flex: 1;

// }

}

.Productlist-content {
  padding: 10px 10px 200px 10px;
  background: #fff;
  // height: 100%;
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
    width: 80%;
    margin: 20px auto;
    height: 265px;
    border: 1px solid #d6d7dc;
  }
  .grid-content {
    margin-top: 20px;
    border-right: 1px solid #d6d7dc;
    text-align: center;
    p {
      color: #333;
      line-height: 55px;
      height: 55px;
    }
    .xiaotext {
      transform: scale(0.7);
      display: inline-block;
    }
  }
  .last-content {
    border-right: none;
  }
  .fastfindtags {
    height: 60px;
    background: #f4f6f4;
  }
  .fastfindtagsSearch {
    background: #f4f6f4;
    position: relative;
  }
  .find-tiaojianText {
    display: inline-block;
    width: 140px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  }
  .find-tiaojian {
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    text-align: center;
    cursor: pointer;
  }
  .active {
    border: 1px solid #21ca2e;
    color: #21ca2e;
  }
  .goods-btn {
    display: inline;
    position: absolute;
    left: 500px;
  }
  .goods-btn .spanfenge {
    display: inline-block;
    color: #d9d9d9;
    padding: 0 5px;
  }
  .viewmore-btn {
    position: absolute;
    right: 45px;
    top: 5px;
  }
  .orderappeal-search {
    background: #f4f6f4;
    border-top: 1px solid #e0e0e0;
    height: 320px;
    width: 100%;
    margin-top: 30px;
  }
  .nodata {
    border: 1px solid #e0e0e0;
    width: 100%;
    text-align: center;
    line-height: 70px;
    margin-top: 20px;
  }
  .bianhao-height {
    line-height: 47px;
    height: 47px;
    border: 1px solid #e0e0e0;
    border-bottom: none;
  }
  .fuzhicopy {
    font-weight: 400;
    color: #7090fd;
    line-height: 28px;
    padding-left: 80px;
    cursor: pointer;
  }
  .bianhao-allconntent {
    // height: 140px;
    border: 1px solid #e0e0e0;
    border-top: none;
    margin-bottom: 20px;
  }
  .shubiaoCustor {
    color: #7090fd;
    cursor: pointer !important;
  }
}
</style>
