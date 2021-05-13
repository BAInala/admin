/* eslint-disable eqeqeq */
/* eslint-disable eqeqeq */
/* eslint-disable eqeqeq */
<template>
  <div class="trading-content">
    <p class="f700">交易数据</p>
    <el-tabs v-model="activeName" @tab-click="handletabClick" :before-leave='jiaoyileaveTab'>
      <el-tab-pane label="交易概括" name="1" :key=1></el-tab-pane>
      <el-tab-pane label="下单未支付" name="2" :key=2></el-tab-pane>
    </el-tabs>
    <div class="trade-jiaoyiinfo" v-if="activeName == 1" :key=1>
      <!-- 实时数据 -->
      <div class="trade-first">
        <span class="line"></span>
        <span class="f700 p-l-10">实时数据</span>
        <span class="timeSmall p-l-10">(统计时间: </span>
        <span class="timeSmall">{{ data }} </span>
        <span class="timeSmall">)</span>
      </div>

      <div class="zhifu-content" >
        <div
          style="width: 90%; height: 130px; margin: 8px auto"
        >
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">支付金额</p>
              <span class="f700">{{ total.allmoney }}</span>
              <span class="timeSmall">单</span>
              <div>
                <span class="xiaotext">昨日全天</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">支付买家数</p>
              <span class="f700">{{ total.allmoney }}</span>
              <div>
                <span class="xiaotext">昨日全天</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content last-content">
              <p class="line-55">支付订单数</p>
              <span class="f700">{{ total.allmoney }}</span>
              <div>
                <span class="xiaotext">昨日全天</span>
                <span class="xiaotext">{{ total.yesterday }}</span>
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <div class="zhifu-imgshow">
        <p class="f700">支付金额</p>
        <div style="padding:18px 5px">
          <span class="span-square"></span> <span class="timeSmall"> 今日</span>
          <span class="span-square fd-two m-l-20"></span> <span class="timeSmall"> 昨日</span>
        </div>
        <!-- 支付金額 -->
        <div id="zhifuAll" style="width:100%;min-height:376px">

        </div>
      </div>

      <!--数据总览 -->
      <div class="shuju-zonglan">
        <span class="line"></span>
        <span class="f700 p-l-10">数据总览</span>
        <span class="timeSmall p-l-10">(统计时间: </span>
        <span class="timeSmall">{{ data }} </span>
        <span class="timeSmall">)</span>
      </div>
      <div class="m-t-20 m-b-20">
        <el-tabs type="border-card" v-model="tName" @tab-click="tdateClick" :before-leave='leaveTab'>
          <el-tab-pane label="支付金额" name='1'>
              <div v-if="tName==1" class="minh-500">
                  <span class="f700">{{ total.allmoney }}</span>
                  <span class="timeSmall">元</span>
                  <div class="p-t-20">
                    <span class="timeSmall">较前一天</span>
                    <span class="timeSmall21 p-l-10"> {{ total.yesterday }}</span>
                    <i class="el-icon-bottom timeSmall21"></i>
                  </div>

                  <div class="p-t-20">
                    <p class="f700">近30天 支付金额 趋势图</p>
                  </div>
                   <div style="padding:18px 5px">
                      <span class="span-square"></span> <span class="timeSmall"> 支付金额</span>
                      <span class="span-square fd-two m-l-20"></span> <span class="timeSmall"> 支付金额均值</span>
                      <span class="span-square fd-three m-l-20"></span> <span class="timeSmall"> 支付金额优秀值</span>
                    </div>
                    <!-- 支付数据总览 -->
                    <div id="zhifufirstView" style="width:100%;min-height:376px">

                    </div>
              </div>
          </el-tab-pane>
         <el-tab-pane label="支付买家数" name='2'>
              <div v-if="tName==2" class="minh-500">2222
                <p>111111111111</p>
              </div>
          </el-tab-pane>
          <el-tab-pane label="支付客单价" name='3'>
               <div v-if="tName==3" class="minh-500">

                 444444444444
                 <p>22222222222222</p>
               </div>
          </el-tab-pane>
          <el-tab-pane label="支付转化率" name='4'>
                <div v-if="tName==4" class="minh-500">4444</div>
          </el-tab-pane>
           <el-tab-pane label="店铺关注用户数" name='5'>
                <div v-if="tName==5" class="minh-500">3432545</div>
          </el-tab-pane>
           <el-tab-pane label="支付订单数" name='6'>
                <div v-if="tName==6" class="minh-500">6664433</div>
          </el-tab-pane>
           <el-tab-pane label="老买家占比" name='7'>
                <div v-if="tName==7" class="minh-500">7856756</div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
    <div class="" v-if="activeName == 2" :key=2 style="min-height:1000px">
        <!-- 下单未支付 -->
      <div class="trade-second">
        <span class="line"></span>
        <span class="f700 p-l-10">实时数据</span>
        <span class="timeSmall p-l-10">(统计时间: </span>
        <span class="timeSmall">{{ notdata }} </span>
        <span class="timeSmall">)</span>
      </div>

      <div class="notpay-content" >
        <div
          class="zhifu-juticontent"
          style="width: 90%; height: 130px; margin: 8px auto"
        >
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">下单未付款金额（元）</p>
              <span class="f700"> {{ notpaytotal.allmoney }}</span>
              <span class="timeSmall">元</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p class="line-55">下单未付款订单数</p>
              <span class="f700">{{ notpaytotal.num }}</span>

            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content last-content">

            </div>
          </el-col>
        </div>
      </div>
      <!-- 催付数据 -->
      <!--数据总览 -->
      <div class="shuju-zonglan">
        <span class="line"></span>
        <span class="f700 p-l-10">催付数据</span>
        <span class="timeSmall p-l-10">(统计时间: </span>
        <span class="timeSmall">{{ notdata }} </span>
        <span class="timeSmall">)</span>
      </div>
      <div class="m-t-20 m-b-20">
        <el-tabs type="border-card" v-model="numName"  :before-leave='numleaveTab'>
          <el-tab-pane label="近30天引导下单人数" name='1'>
              <div v-if="numName==1" class="minh-500">
                  <span class="f700">{{ 0 }}</span>
                  <span class="timeSmall">元</span>
                  <div class="p-t-20">
                    <p class="">近30天 趋势图</p>
                  </div>
                    <!-- 波浪图 -->
                    <div id="aboutThirtyView" style="width:100%;min-height:376px">

                    </div>
              </div>
          </el-tab-pane>
         <el-tab-pane label="近30天引导成交金额" name='2'>
              <div v-if="numName==2" class="minh-500">
                <p>hhsse</p>
              </div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  data () {
    var firstcolors = ['#21ca2e', '#7090FD', '#FE748B']
    return {
      activeName: '1',
      tName: '1',
      numName: '1',
      data: '2021-05-21 11:30',
      notdata: '2021-05-23 09:30',
      total: {
        allmoney: 1232332,
        yesterday: 100
      },
      notpaytotal: {
        allmoney: 7890,
        num: 299
      },
      options: {
        title: {
          text: ''
        },
        color: ['#21ca2e', '#7090FD'],
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          boundaryGap: false,
          data: ['0', '3', '6', '9', '12', '15', '18', '21', '']
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '今日',
          type: 'line',
          lineStyle: {
            color: '#21ca2e'
          },
          data: [120, 132, 101, 134, 90, 230, 510, 590, 120]
        },
        {
          name: '昨日',
          type: 'line',
          silent: true,
          lineStyle: {
            color: '#7090FD'
          },
          data: [220, 182, 191, 234, 290, 330, 310, 310, 220]
        }]
      },
      viewfirstoption: {
        color: firstcolors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        // tooltip: {
        //   trigger: 'axis'
        // },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // axisLine: {
            //   onZero: false
            // },
            axisPointer: {
              label: {
                // formatter: function (params) {
                //   return '降水量  ' + params.value +
                //                 (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                // }
              }
            },
            data: ['2021-05-15', '2021-05-20', '2021-05-25', '2021-05-30', '2021-05-15', '2021-06-04', '2021-06-09', '2021-06-14']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '支付金额',
            type: 'line',
            smooth: true, // 圆滑的波浪线
            emphasis: {
              focus: 'series'
            },
            data: [62.6, 95.9, 239.0, 426.4, 128.7, 70.7, 175.6, 199]
          },
          {
            name: '支付金额均值',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [23.9, 35.9, 411.1, 118.7, 248.3, 569.2, 231.6, 290]
          }, {
            name: '支付金额优秀值',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [113.9, 225.9, 111.1, 118.7, 148.3, 169.2, 399, 200]
          }
        ]
      },
      lastoption: {
        title: {
          text: ''
        },
        color: ['#7090FD'],
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          boundaryGap: false,
          data: ['2021-05-15', '2021-05-20', '2021-05-25', '2021-05-30', '2021-05-15', '2021-06-04', '2021-06-09', '2021-06-14']
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '引导下单人数',
            type: 'line',
            smooth: true, // 圆滑的波浪线
            lineStyle: {
              color: '#7090FD'
            },
            data: [120, 132, 101, 134, 90, 230, 510, 590]
          }
        ]
      }
    }
  },
  created () { console.log(this) },
  methods: {
    handletabClick (tab, event) {
      console.log(this)
      console.log(tab, event)
    },
    jiaoyileaveTab (activeName, oldActiveName) { // 交易数据的tab
      // 交易概况
      if (activeName === '1') {
        // 新建一个promise对象
        const newPromise = new Promise((resolve) => {
          resolve()
        })
        // 然后异步执行echarts的初始化函数
        newPromise.then(() => {
          this.morenchart('zhifuAll').setOption(this.options)
          if (this.tName === '1') {
            this.morenchart('zhifufirstView').setOption(this.viewfirstoption)
          }
          const self = this
          window.addEventListener('resize', () => {
            this.morenchart('zhifuAll').resize()
            this.morenchart('zhifufirstView').resize()
          })
        })
      }
      // 支付未下单
      if (activeName === '2') {
        const newPromise = new Promise((resolve) => {
          resolve()
        })
        // 然后异步执行echarts的初始化函数
        newPromise.then(() => {
          this.morenchart('aboutThirtyView').setOption(this.lastoption)
          const self = this
          window.addEventListener('resize', () => {
            this.morenchart('aboutThirtyView').resize()
          })
        })
      }
    },
    tdateClick () {
      console.log(this.tName)
    },
    leaveTab (whichName) { // 数据总览下的7个tab
      const whichPromise = new Promise((resolve) => {
        resolve()
      })
      switch (whichName) {
        case '1':
          whichPromise.then(() => {
            this.morenchart('zhifufirstView').setOption(this.viewfirstoption)
            const self = this
            window.addEventListener('resize', () => {
              self.morenchart('zhifufirstView').resize()
            })
          })
          break
        case 2:
          break
      }
    },
    numleaveTab (activeName, oldActiveName) { // 催付数据下面的2个tab
      const lastPromise = new Promise((resolve) => {
        resolve()
      })
      switch (activeName) {
        case '1':
          lastPromise.then(() => {
            this.morenchart('aboutThirtyView').setOption(this.lastoption)
            const self = this
            window.addEventListener('resize', () => {
              this.morenchart('aboutThirtyView').resize()
            })
          })
          break
        case 2:
          break
      }
      if (activeName === '1') {

      }
    },
    historyMapInit (char) {
      // 防止出现“There is a chart instance already initialized on the dom.”的警告
      // 在使用echarts发现需要及时对新建的myChart实例进行销毁,否则会出现上述警告
      if (char && !!char) {
        char.dispose()
      }
    },
    ChartsXAxis (options, id, index) {
      let linearBarDom = echarts.getInstanceByDom(document.getElementById(id)) // 有的话就获取已有echarts实例的DOM节点。
      if (linearBarDom == null) { // 如果不存在，就进行初始化。
        linearBarDom = echarts.init(document.getElementById(id))
      }
      linearBarDom.setOption(options, true)
    },
    // 默认的第一个图
    morenchart (id) {
      var chartDom = document.getElementById(id)
      var myChart = echarts.init(chartDom)
      return myChart
    }
  },
  mounted () {
    this.morenchart('zhifuAll').setOption(this.options)// 默认的第一个图

    if (this.tName === '1') {
      this.morenchart('zhifufirstView').setOption(this.viewfirstoption)// 默认的第一个--tab-支付金额
    }

    const self = this
    window.addEventListener('resize', () => {
      this.morenchart().resize()// 默认的第一个图
      this.morenchart('zhifufirstView').resize()// 默认的第一个--tab-支付金额
    })
  }
}
</script>

<style  lang="scss">
.trading-content {
  padding: 10px;
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

  .zhifu-content,.notpay-content {
    width: 80%;
    margin: 20px auto;
    height: 150px;
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
  //   正方形
  .span-square {
    width: 10px;
    height: 10px;
    display: inline-block;
    background: #21ca2e;
  }
  .fd-two{
      background: #7090FD;
  }
  .fd-three{
      background: #FE748B;
  }
  .minh-500{
    min-height: 500px;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #21CA2E;
    background-color: #FFFFFF;
    border-right-color: #21CA2E;
    border-left-color: #21CA2E;
}
.el-tabs--border-card > .el-tabs__header {
    border-bottom: 1px solid #21CA2E;
}
}

</style>
