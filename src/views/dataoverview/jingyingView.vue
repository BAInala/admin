<template>
  <div class="jingyingView-content">
    <p class="f700 p-10">经营总览</p>
    <div class="m-t-50">
      <!-- 进度 -->
      <div class="jingying-progressContent">
        <div style="width: 90%; margin: 10px auto; height: 200px">
          <el-col :span="8">
            <div class="grid-content">
              <el-col :span="12">
                <el-progress type="circle" :percentage="25"></el-progress>
                <p class="progressDate">评分统计时间：2021-01-01</p>
              </el-col>
              <el-col :span="12">
                <p class="f700 p-10">店铺经营评分</p>
                <p class="jingyingFenshu">
                  评分总分为 100分， 是基于昨日表现综合评价与
                  同一层级商户进行排行得分 层级上升时， 评分可能会出现轻微下降
                </p>
              </el-col>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content right-content">
              <p class="f700 p-10">第{{defaultJibie.indexZ}}层级</p>
              <p class="jingyingFenshu">
                近30天的交易额再增加
                <span class="cff">{{ mubiaoMoney }}</span>
                元 即可进入下一层级
              </p>
              <div class="jibieHuafen">
                <div
                  class="w-14 inlineSlid"
                  v-for="item in jibieList"
                  :key="item.index"
                >
                  <p>第{{item.indexZ}}等级</p>
                  <div class="jibiediv" v-bind:class="{ jibieActive: item.index<=defaultJibie.index }">
                    <span class="jibiespan" >{{ item.value }}</span>
                  </div>
                </div>
              </div>
              <div class="l-right">
                <span class="jibieYiju"
                  >层级划分是根据近30天的交易额，单位：元</span
                >
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 交易数据-->
      <div class="m-t-50">
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">交易数据</span>
          <span class="timeSmall p-l-10">(统计时间: </span>
          <span class="timeSmall">{{ data }} </span>
          <span class="timeSmall">)</span>
        </div>
        <div class="jiaoyidata-content">
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">支付金额</p>
              <span class="f700">{{ jiaoyiData.money }}</span>
              <span class="timeSmall">元</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ jiaoyiData.yesterday }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">支付买家数</p>
              <span class="f700">{{ jiaoyiData.buypersons }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ jiaoyiData.buyOld }}</span>
              </div>
            </div>
          </el-col>

          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">支付订单数</p>
              <span class="f700">{{ jiaoyiData.dingdanNum }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ jiaoyiData.diandanOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">支付转化率</p>
              <span class="f700">{{ jiaoyiData.zhuanhuanRate }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ jiaoyiData.zhuanhuanOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">支付客单价</p>
              <span class="f700">{{ jiaoyiData.onemoney }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ jiaoyiData.oneOld }}</span>
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 商品数据 -->
      <div class="m-t-50">
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">商品数据</span>
          <span class="timeSmall p-l-10">(统计时间: </span>
          <span class="timeSmall">{{ data }} </span>
          <span class="timeSmall">)</span>
        </div>
        <div class="jiaoyidata-content">
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">商品访客数</p>
              <span class="f700">{{ goodsData.viewpersons }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ goodsData.viewpersonsOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">商品浏览量</p>
              <span class="f700">{{ goodsData.goodsViews }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ goodsData.viewsOld }}</span>
              </div>
            </div>
          </el-col>

          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">商品成交件数</p>
              <span class="f700">{{ goodsData.buyNum }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ goodsData.buyOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">被访问商品数</p>
              <span class="f700">{{ goodsData.viewed }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ goodsData.viewedOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">商品收藏总数</p>
              <span class="f700">{{ goodsData.shoucangs }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ goodsData.shoucangOld }}</span>
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 服务数据 -->
      <div class="m-t-50">
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">服务数据</span>
          <span class="timeSmall p-l-10">(统计时间: </span>
          <span class="timeSmall">{{ data }} </span>
          <span class="timeSmall">)</span>
        </div>
        <div class="jiaoyidata-content">
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">成功退款金额</p>
              <span class="f700">{{ serviceData.successRefund }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ serviceData.successoOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">成功退款订单数</p>
              <span class="f700">{{ serviceData.refundNum }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ serviceData.refundOld }}</span>
              </div>
            </div>
          </el-col>

          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">平台介入率</p>
              <span class="f700">{{ serviceData.Platformrate }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ serviceData.PlatformrateOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">成功退款率</p>
              <span class="f700">{{ serviceData.refundRate }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ serviceData.refundRateOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col class="w-20">
            <div class="jiaoyi-content">
              <p class="line-55">平均退款速度</p>
              <span class="f700">{{ serviceData.refundspeed }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ serviceData.refundspeedOld }}</span>
              </div>
            </div>
          </el-col>
        </div>
      </div>

      <!-- 客服数据 -->
      <div class="m-t-50" style="margin-bottom: 200px">
        <div>
          <span class="line"></span>
          <span class="f700 p-l-10">客服数据</span>
          <span class="timeSmall p-l-10">(统计时间: </span>
          <span class="timeSmall">{{ data }} </span>
          <span class="timeSmall">)</span>
        </div>
        <div class="jiaoyidata-content">
          <el-col :span="6">
            <div class="jiaoyi-content">
              <p class="line-55">3分钟人工回复率</p>
              <span class="f700">{{ customerData.responserate }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ customerData.responserateOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="jiaoyi-content">
              <p class="line-55">平均人工响应时长</p>
              <span class="f700">{{ customerData.responses }}</span>
              <span class="timeSmall">分钟</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ customerData.responseOld }}</span>
              </div>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="jiaoyi-content">
              <p class="line-55">询单转化率</p>
              <span class="f700">{{ customerData.Inquiryrate }}</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ customerData.InquiryrateOld }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="jiaoyi-content">
              <p class="line-55">客服销售额</p>
              <span class="f700">{{ customerData.Sales }}</span>
              <span class="timeSmall">元</span>
              <div>
                <span class="xiaotext">较前一天：</span>
                <span class="xiaotext">{{ customerData.Salesold }}</span>
              </div>
            </div>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: '2021-05-30 11:30',
      mubiaoMoney: 324.9,
      defaultJibie: {
        index: 2,
        indexZ: '三'

      },
      jibieList: [
        {
          index: 0,
          indexZ: '一',
          value: 0
        },
        {
          index: 1,
          indexZ: '二',
          value: 400
        },
        {
          index: 2,
          indexZ: '三',
          value: 3490
        },
        {
          index: 3,
          indexZ: '四',
          value: 27150
        },
        {
          index: 4,
          indexZ: '五',
          value: 110234
        },
        {
          index: 5,
          indexZ: '六',
          value: 190234
        },
        {
          index: 6,
          indexZ: '七',
          value: '∞'
        }
      ],
      jiaoyiData: {
        money: 126,
        yesterday: '50%',
        buypersons: 15,
        buyOld: '10%',
        dingdanNum: 123,
        diandanOld: '0.9%',
        zhuanhuanRate: '30%',
        zhuanhuanOld: '10%',
        onemoney: 200,
        oneOld: '0.00'
      },
      goodsData: {
        viewpersons: 100,
        viewpersonsOld: '1%',
        goodsViews: 300,
        viewsOld: '0.00',
        buyNum: 60,
        buyOld: '20%',
        viewed: 10,
        viewedOld: '0.6',
        shoucangs: 90,
        shoucangOld: '3%'
      },
      serviceData: {
        successRefund: 300,
        successoOld: '1%',
        refundNum: 100,
        refundOld: '0.09%',
        Platformrate: '20%',
        PlatformrateOld: '0.7%',
        refundRate: '90%',
        refundRateOld: '2%',
        refundspeed: 95,
        refundspeedOld: '0.05%'
      },
      customerData: {
        responserate: '80%',
        responserateOld: '1%',
        responses: 20,
        responseOld: '50%',
        Inquiryrate: '60%',
        InquiryrateOld: '10%',
        Sales: 900,
        Salesold: '3%'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.jingyingView-content {
 padding: 10px 10px 200px 10px;
  background: #fff;
  .jingying-progressContent {
    width: 80%;
    margin: 20px auto;
    height: 250px;
    border: 1px solid #d6d7dc;
  }
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

  /**级别划分**/
  //   . {
  //     width: 100%;
  //     height: 6px;
  //     margin: 16px 0;
  //     background-color: #E4E7ED;
  //     border-radius: 3px;
  //     position: relative;
  //     cursor: pointer;
  //     vertical-align: middle;
  // }
  .jibieHuafen {
    height: 95px;
    background: #f4f6f4;
    padding: 0px 20px;
    margin-top: 10px;
  }
  .w-14 {
    width: 14%;
  }
  .inlineSlid {
    display: inline-block;
  }
  .jibiediv {
    display: inline-block;
    height: 5px;
    margin-top: 15px;
    width: 95%;
    background: #d6d7dc;
    position: relative;
  }
  .jibiespan {
    position: absolute;
    top: 10px;
    color: #333333;
    line-height: 17px;
  }
  .jibieYiju {
    color: #666666;
    line-height: 20px;
    font-size: 14px;
  }
  .jibieActive{
    background: #21CA2E;
  }
  //end

  .grid-content {
    margin-top: 20px;
    border-right: 1px solid #d6d7dc;
    text-align: center;
    height: 200px;
    padding-right: 28px;
  }
  .right-content {
    border: none;
    text-align: left;
    padding-left: 20px;
  }
  .jingyingFenshu {
    padding-top: 20px;
    font-size: 14px;
  }

  .progressDate {
    color: #333333;
    line-height: 20px;
    font-size: 14px;
  }
  .cff {
    color: #fe748b;
  }
  .jiaoyidata-content {
    margin-top: 30px;
    height: 160px;
    border: 1px solid #d6d7dc;
  }
  .jiaoyi-content {
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
  /**划分5分**/
  .w-20 {
    width: 20%;
  }
}
</style>
