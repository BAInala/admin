<template>
  <div class="aftersale-content">
    <p class="f700">售后工作台</p>
    <div class="m-t-50">
      <!-- 售后数据 -->
      <div class="aftersale -first">
        <span class="line"></span>
        <span class="f700 p-l-10">售后数据</span>
        <span class="timeSmall p-l-10">(统计时间: </span>
        <span class="timeSmall">{{ data }} </span>
        <span class="timeSmall">)</span>
      </div>

      <div class="shouhou-content">
        <div style="width: 90%; margin: 8px auto; height: 130px">
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">平均退款时长</p>
              <span class="f700">{{ total.time }}</span>
              <span class="timeSmall">小时</span>
              <div>
                <span class="xiaotext">较前一日：</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">仅退款自主完结时长</p>
              <span class="f700">{{ total.time }}</span>
              <span class="timeSmall">小时</span>
              <div>
                <span class="xiaotext">较前一日：</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content last-content">
              <p class="line-55">退货/退款自主完结时长</p>
              <span class="f700">{{ total.time }}</span>
              <span class="timeSmall">小时</span>
              <div>
                <span class="xiaotext">较前一日：</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
        </div>
        <div style="border-top: 1px solid #d6d7dc">
          <div style="width: 90%; margin: 8px auto">
            <el-col :span="8">
              <div class="grid-content">
                <p class="line-55">24小时内将逾期</p>
                <span class="f700">{{ total.time }}</span>
                <span class="timeSmall">单</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <p class="line-55">24小时内待商家举证</p>
                <span class="f700">{{ total.time }}</span>
                <span class="timeSmall">小时</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content last-content">
                <p class="line-55">24小时内平台同意退款</p>
                <span class="f700">{{ total.time }}</span>
                <span class="timeSmall">小时</span>
              </div>
            </el-col>
          </div>
        </div>
      </div>

      <!-- 售后订单查询 -->

      <div class="aftersale -order">
        <span class="line"></span>
        <span class="f700 p-l-10">售后订单查询</span>
      </div>

      <div class="fastfindtags m-t-20">
        <el-row class="p-t-10">
          <span class="find-tiaojianText">快速筛选订单：</span>
          <el-col :span="3">
            <div
              class="find-tiaojian"
              @click="setCenter(0)"
              :class="activeClass == 0 ? 'active' : ''"
            >
              即将逾期
            </div>
          </el-col>
          <el-col :span="3">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(1)"
              :class="activeClass == 1 ? 'active' : ''"
            >
              待商家处理
            </div>
          </el-col>
          <el-col :span="3">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(2)"
              :class="activeClass == 2 ? 'active' : ''"
            >
              平台处理中
            </div>
          </el-col>
          <el-col :span="3">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(3)"
              :class="activeClass == 3 ? 'active' : ''"
            >
              待买家处理
            </div>
          </el-col>
          <el-col :span="3">
            <div
              class="find-tiaojian m-l-20"
              @click="setCenter(4)"
              :class="activeClass == 4 ? 'active' : ''"
            >
              退货待处理
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 售后搜索 展示更多 -->
      <div class="fastfindtagsSearch m-t-20" style="min-height: 60px">
        <el-row class="p-t-10">
          <span class="find-tiaojianText">售后搜索</span>
          <div class="">
            <el-input
              placeholder="请输入订单编号/退货运单号/手机号/商品ID"
              style="width: 410px"
              v-model="goodsName"
            ></el-input>
            <div class="goods-btn">
              <span class="spanfenge">|</span>
              <el-button type="text" class="maincolor" @click="goodsSearch()"
                >搜索</el-button
              >
            </div>
          </div>
        </el-row>
        <!-- 具体的搜素条件 -->
        <div class="orderappeal-search" v-show="!!viewMoreflag">
          <el-form
            ref="orderappeal-form"
            :model="orderForm"
            label-width="80px"
            label-position="right"
            class="p-t-40"
          >
            <el-col :span="8">
              <el-form-item label="售后类型">
                <el-select
                  v-model="orderForm.aftersaletype"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="售后状态">
                <el-select v-model="orderForm.status" placeholder="请选择">
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
              <el-form-item label="售后原因">
                <el-select v-model="orderForm.reason" placeholder="请选择">
                  <el-option
                    v-for="item in optionsReason"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发货状态">
                <el-select v-model="orderForm.fahuoStatus" placeholder="请选择">
                  <el-option
                    v-for="item in fahuoStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="操作类型">
                <el-select v-model="orderForm.reason" placeholder="请选择">
                  <el-option
                    v-for="item in operateStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退款金额">
                <el-col :span="7">
                  <el-input v-model="orderForm.money1"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center">-</el-col>
                <el-col :span="7">
                  <el-input v-model="orderForm.money2"></el-input>
                </el-col>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="快递拦截">
                <el-select v-model="orderForm.refuse" placeholder="请选择">
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
              <el-form-item label="申请时间">
                <el-date-picker
                  v-model="orderForm.time"
                  type="datetimerange"
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

        <div class="viewmore-btn">
          <el-button type="text" @click="searchText()">{{
            viewMore
          }}</el-button>
        </div>
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
                      style="width: 80px;"
                      :src="scope.row.url"
                      ></el-image>
                    </el-col>
                    <el-col :span="12">
                       <p style="margin-left: 10px;color:#7090FD;overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;">{{ scope.row.info }}</p>
                       <p style="margin-left: 10px;color:#999">ID:{{ scope.row.id }}</p>
                       <p style="margin-left: 10px；font-weight:700;color:#000">{{ scope.row.name }}</p>

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
                    <p style="margin-left: 10px">实收: {{ scope.row.actualMoney }}</p>
                    <p style="margin-left: 10px">退款：{{ scope.row.refundMoney }}</p>
                  </template>
                </el-table-column>
                 <el-table-column label="金额">
                  <template #default="scope">
                    <p style="margin-left: 10px">实收: {{ scope.row.actualMoney }}</p>
                    <p style="margin-left: 10px">退款：{{ scope.row.refundMoney }}</p>
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
                      style="color: #7090FD;cursor:pointer"
                      @click="viewDetail(scope.$index, scope.row)"
                      >查看详情</el-button>

                    </div>

                    <el-button
                      size="mini"
                      type="text"
                      style="color: #7090FD;cursor:pointer"
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
          <el-button type="primary" @click="ordersureRemarks()">确 定</el-button>
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
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
      options: [
        {
          value: '1',
          label: '仅退款'
        },
        {
          value: '2',
          label: '退款退货'
        },
        {
          value: '3',
          label: '换货'
        },
        {
          value: '4',
          label: '补寄'
        },
        {
          value: '5',
          label: '维修'
        }
      ],
      optionsStatus: [
        {
          value: '1',
          label: '进行中售后单'
        },
        {
          value: '2',
          label: '待商家处理'
        },
        {
          value: '3',
          label: '待商家收货'
        },
        {
          value: '4',
          label: '待消费者发货'
        },
        {
          value: '5',
          label: '平台处理中'
        },
        {
          value: '6',
          label: '退款成功'
        }
      ],
      optionsReason: [
        {
          value: '1',
          label: '七天无理由退货'
        },
        {
          value: '2',
          label: 'hahah'
        }
      ],
      fahuoStatus: [
        {
          value: '1',
          label: '未发货'
        },
        {
          value: '2',
          label: '已发货'
        }
      ],
      operateStatus: [
        {
          value: '1',
          label: '商家同意退款'
        },
        {
          value: '2',
          label: '平台同意退款'
        },
        {
          value: '3',
          label: '商家同意退货'
        },
        {
          value: '4',
          label: '平台同意退货'
        }
      ],
      operateRefuse: [
        {
          value: '1',
          label: '全部'
        },
        {
          value: '2',
          label: '发起拦截失败'
        },
        {
          value: '3',
          label: '拦截中'
        },
        {
          value: '4',
          label: '拦截失败'
        },
        {
          value: '5',
          label: '拦截成功'
        },
        {
          value: '6',
          label: '商家已签收'
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
        operateStatus: '',
        money1: '',
        money2: '',
        refuse: '',
        time: ''
      }
    },
    viewDetail (index, row) {
      console.log(index, row)
      console.log(JSON.stringify(row))
      this.$router.push({ // 核心语句
        path: 'vieworderdetaill', // 跳转的路径
        query: { // 传递参数
          index,
          data: JSON.stringify(row)
        },
        active: { background: '#ed4' }
      })
    },
    handleaddRemark (index, row) { // 添加备注
      console.log(index, row)
      this.orderdialogFormVisible = true
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
        // duration: 100
      })
    },
    ordersureRemarks () { // 添加备注-确定按钮
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
.aftersale-content {
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
    height: 400px;
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
  .shubiaoCustor{
    color: #7090FD;
    cursor:pointer !important;

  }
}
</style>
