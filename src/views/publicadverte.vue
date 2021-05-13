<template>
   <div class="content-firstpage">
      <div class="gongyidiv white">
            <!-- 右下 -->
               <div class="gongyidetail white m-t-20">
                  <el-col :span="15" class="f700 p-b-20">
                     <span>公益广告</span>
                  </el-col>
                  <div class="right-huodong m-t-50">
                        <div v-for="item in items"  :key="item" style="height:80px;padding: 10px 1px;" >
                              <div class="l-left" style="width:60%">
                                 <span class="l-left spanline"></span>

                                 <el-image class="l-left" :src="item.url" style="width:10%"></el-image>
                                 <div class="l-left" style=" white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;">
                                    <p class="p-l-20 line-28 textweight">{{item.text}}</p>
                                    <span class="p-l-20 line-28 timescolor">{{item.times}}</span>
                                 </div>

                              </div>
                              <div class="l-right" style="margin-right:40px;line-height:80px">
                                 <span class="p-l-20 timescolor">发布时间: {{item.data}}</span>
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
        times: 'fwehrf8erhfcnsidohfi0wehtfiwfsanfwuer2093qtjfefdnj0owe'
      }, {
        text: '222',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 'fwehrf8erhfcnsidohfi0wehtfiwfsanfwuer2093qtjfefdnj0owe'
      }, {
        text: '3333',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 'fwehrf8erhfcnsidohfi0wehtfiwfsanfwuer2093qtjfefdnj0owe'
      }, {
        text: '4444',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 'fwehrf8erhfcnsidohfi0wehtfiwfsanfwuer2093qtjfefdnj0owe'
      }, {
        text: '555',
        data: '2021-05-06',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        times: 'fwehrf8erhfcnsidohfi0wehtfiwfsanfwuer2093qtjfefdnj0owe'
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

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.content-firstpage{
   height:100%
}
.gongyidiv{
   height: 100%;
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

  .gongyidetail{
      padding: 10px 20px;
      border-radius: 10px;

   }

   .shujutext{
      color: #FE748B;
      line-height: 22px;
      font-size: 14px;
   }

  .textweight{
     font-weight: 700;
  }
  .timescolor{
   color: #666666;
   line-height: 22px;
   font-size: 14px;
  }
  .spanline{
     width: 10px;
    height: 10px;
    background:#21CA2E;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    margin-top: 35px;
    margin-right: 20px;
  }

</style>
