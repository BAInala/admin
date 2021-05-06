<template>
   <div class="content-firstpage">
      <div class="firstpagedetail white">
         <el-row>
            <el-col :span="4">
               <div class="grid-content">
                     <p>待支付</p>
                     <span>{{total.waitpaid}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>

            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.waitpaid}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>
            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.waitqianshou}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>
            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.tuikan}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.willyanchifahuo}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.aldreayfahuo}}</span>
                     <span class="xiaotext">单</span>
               </div>
            </el-col>
         </el-row>
      </div>
      <div class="firstpage-middle clearfix" style="height:610px;">
            <!-- 左侧 -->
            <div class="l-left shileft"  style="width: 49%;">
               <div class="middle-left-top white">

               <el-col :span="15">
                  <span>实时数据</span>
                  <span class="p-l-20">更新时间:</span>
                  <span>2021:05-06 11.30</span>
               </el-col>
               <el-col :span="3" :offset="6">
                  <p class="shujutext">数据中心</p>
               </el-col>

               <el-divider></el-divider>
               <div>
                     <el-row>
                     <el-col :span="8">
                        <div class="grid-content">
                           <p>支付金额</p>
                           <span>{{total.waitpaid}}</span>
                           <span class="xiaotext">元</span>
                        </div>
                     </el-col>

                     <el-col :span="8">
                        <div class="grid-content">
                           <p>支付订单数</p>
                           <span>{{total.waitpaid}}</span>
                           <span class="xiaotext">单</span>
                        </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="grid-content">
                           <p>支付买家数</p>
                           <span>{{total.waitqianshou}}</span>
                        </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="grid-content p-t-20">
                           <p>商品访客数</p>
                           <span>{{total.tuikan}}</span>
                        </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="grid-content p-t-20">
                           <p>商品浏览量</p>
                           <span>{{total.willyanchifahuo}}</span>
                        </div>
                     </el-col>
                     <el-col :span="8">
                        <div class="grid-content p-t-20">
                           <p>询单转换率</p>
                           <span>{{total.aldreayfahuo}}</span>
                           <span class="xiaotext">(10-11)</span>
                        </div>
                     </el-col>
                  </el-row>
               </div>
               </div>

               <!-- 左侧下 -->
               <div class="middle-left-bottom white m-t-20">

                  <el-col :span="15" >
                     <span>推广置顶</span>
                  </el-col>
                  <el-col :span="3" :offset="6">
                     <p class="shujutext">推广详情</p>
                  </el-col>

                  <el-divider></el-divider>
                  <div>
                        <el-row :gutter="20">
                        <el-col :span="24">
                           <div class="tuiguangtop-content">

                           </div>
                        </el-col>

                        <el-col :span="8" class="tgbg">
                           <div class="grid-content tg-content">
                              <span>{{total.waitpaid}}</span>
                              <span class="xiaotext">个</span>
                              <p  class="tgtextlimit">单元限时推广</p>
                           </div>
                        </el-col>
                        <el-col :span="8"  class="tgbg">
                           <div class="grid-content tg-content">
                              <span>{{total.waitpaid}}</span>
                              <span class="xiaotext">个</span>
                              <p  class="tgtextlimit">单元限时推广</p>
                           </div>
                        </el-col>
                        <el-col :span="8"  class="tgbg">
                           <div class="grid-content p-t-20 tg-content">
                              <span>{{total.waitpaid}}</span>
                              <span class="xiaotext">个</span>
                              <p  class="tgtextlimit">单元限时推广</p>
                           </div>
                        </el-col>

                        <!-- border -->
                        <el-col :span="8" class="tgbottom-content tgbottom-none ">
                           <div class="grid-content p-t-20">
                              <span>{{total.tuikan}}</span>
                              <p>今日曝光量</p>
                           </div>
                        </el-col>
                        <el-col :span="8" class="tgbottom-content tgbottom-none  tgbottom-left">
                           <div class="grid-content p-t-20 ">
                              <span>{{total.willyanchifahuo}}</span>
                              <p>今日推广花费</p>
                           </div>
                        </el-col>
                        <el-col :span="8" class="tgbottom-content tgbottom-left">
                           <div class="grid-content p-t-20 ">
                              <span>{{total.aldreayfahuo}}</span>
                              <p>今日投入产出比</p>

                           </div>
                        </el-col>
                     </el-row>
                  </div>
               </div>

            </div>

            <!-- 右侧 -->
            <div class="l-right shiright"  style="width: 48%;">
                 <!-- 右侧上 -->
                  <div class="gongyi-right-top white">

                  <el-col :span="15">
                     <span>公益广告</span>
                  </el-col>
                  <el-col :span="3" :offset="6">
                     <p class="shujutext">广告详情</p>
                  </el-col>

                  <el-divider></el-divider>
                  <div class="right-card">
                        <el-carousel :interval="4000" type="card" height="180px">
                           <el-carousel-item v-for="item in 6" :key="item">
                              <h3 class="medium">{{ item }}</h3>
                           </el-carousel-item>
                        </el-carousel>

                  </div>
               </div>

               <!-- 右下 -->
               <div class="pingtai-right-bottom white m-t-20">
                  <el-col :span="15">
                     <span>平台活动</span>
                  </el-col>
                  <el-col :span="3" :offset="6">
                     <p class="shujutext">查看更多</p>
                  </el-col>
                  <el-divider></el-divider>
                  <div class="right-huodong">
                        <div v-for="item in items"  :key="item" style="height:60px">
                              <div class="l-left" style="width:60%">
                                 <el-image class="l-left" :src="item.url" style="width:10%"></el-image>
                                 <div class="l-left">
                                    <p class="p-l-20 textweight">{{item.text}}</p>
                                    <span class="p-l-20 timescolor">报名时间: {{item.data}}</span>
                                    <span class="p-l-20 timescolor">已报名</span>
                                    <span class="p-l-20 timescolor">{{item.times}}</span>
                                 </div>

                              </div>
                              <div class="l-right" style="margin-right:40px">
                                 <el-button>立即报名</el-button>

                              </div>

                        </div>

                  </div>
               </div>

            </div>

      </div>
      <!-- 底部 -->
      <div class="firstpage-bottom clearfix m-t-20" style="height:500px;">
         <div class="l-left" style="width: 49%;">
            <div class="guize-left white">
               <el-col :span="15">
                  <span>规则中心</span>
               </el-col>
               <el-col :span="3" :offset="6">
                  <p class="shujutext">显示更多</p>
               </el-col>
               <el-divider></el-divider>
               <div class="right-huodong">
                  <div v-for="guize in guizes"  :key="guize" style="height:60px">
                        <div  style="width:70%">
                           <span class="keyinline">{{guize.key}}</span>
                           <span class="p-l-20 textweight">{{guize.text}}</span>
                        </div>
                  </div>
               </div>
            </div>
         </div>
          <div class="l-right" style="width: 48%;">
             <div class="white yingxiao-right">
               <el-col :span="15">
                  <span>营销工具</span>
               </el-col>
               <el-col :span="3" :offset="6">
                  <p class="shujutext">查看更多</p>
               </el-col>
               <el-divider></el-divider>
               <div class="right-huodong" style="padding:20px">
                  <div class="tuiguangtop-content">

                  </div>
                  <div class="m-t-20">
                     <el-col :span="10" style="height:70px;border:1px solid #d9d9d9;">

                     </el-col>

                     <el-col :span="10" :offset="2" style="height:70px;border:1px solid #d9d9d9">

                     </el-col>
                  </div>

            </div>
            </div>

         </div>

      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      total: {
        waitpaid: 1,
        waitfahuo: 2,
        waitqianshou: 3,
        tuikan: 1,
        willyanchifahuo: 0,
        aldreayfahuo: 2
      },
      items: [{
        text: '1111',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 1999
      }, {
        text: '222',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 1999
      }, {
        text: '3333',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 1999
      }, {
        text: '4444',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 1999
      }, {
        text: '555',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 888
      }],
      guizes: [{
        text: 'hydhshhfd 如何日进斗金',
        key: 9
      }, {
        text: '666',
        key: 10
      }, {
        text: '7777',
        key: 11
      }, {
        text: '99jhrtyjjttyyt6yt6r',
        key: 12
      }]

    }
  },
  computed: {
    username () {
      const username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand (command) {
      // eslint-disable-next-line eqeqeq
      if (command == 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    }

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.firstpagedetail{
   height: 94px;
   border-radius: 10px;
}
  .grid-content{
      padding-left: 20%;
      padding-top: 12px;
      p {
         color: #666666;
         line-height: 28px;
         height: 28px;
      }
     .xiaotext{
         transform: scale(0.8);
         display: inline-block;
      }
   }
   .firstpage-bottom{
      border-radius: 10px;

   }
   .tgtextlimit{
       font-size: 12px;
   }
   .tgbg{
      margin-top: 20px;
      padding: 10px 20px;
   }
   .tg-content{
      background: #F4F6F4;

   }

   .middle-left-top,.middle-left-bottom,.pingtai-right-bottom,.gongyi-right-top,.guize-left,.yingxiao-right{
      padding: 10px 20px;
      border-radius: 10px;

   }
   .tuiguangtop-content{
      height: 160px;
      background: #D8D8D8;

   }
   .tuiguang-bottom-borde{
      opacity: 0.6;
      border: 1px solid #D6D7DC;
   }
   .tgbottom-content{
   //   border: 1px solid #D6D7DC;
   }
   .tgbottom-none{
      border-right: none;
   }
   .tgbottom-left{
       border-left: none;
   }
  .firstpage-middle{
      height: 100%;
      margin-top: 20px;
   }
   .shujutext{
      color: #FE748B;
      line-height: 22px;
      font-size: 14px;
   }

   // 轮播
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
//  轮播结束
  .right-card{
     height: 200px;
     background:#d9d9d9;
  }
  .right-huodong{
     height: 240px;
     overflow-y: scroll;
  }
  .textweight{
     font-weight: 700;
  }
  .timescolor{
   color: #666666;
   line-height: 22px;
   font-size: 14px;
  }
  .keyinline{
     width: 30px;
    height: 30px;
    background: rgba(33, 202, 46, 0.1);
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }

</style>
