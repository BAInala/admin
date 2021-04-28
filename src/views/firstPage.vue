<template>
   <div class="content-firstpage">
      <div class="firstpagedetail white">
         <el-row>
            <el-col :span="4">
               <div class="grid-content">
                     <p>待支付</p>
                     <span>{{total.waitpaid}}</span>
                     <span>单</span>
               </div>
            </el-col>

            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.waitpaid}}</span>
                     <span>单</span>
               </div>
            </el-col>
            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.waitqianshou}}</span>
                     <span>单</span>
               </div>
            </el-col>
            <el-col :span="4">
               <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.tuikan}}</span>
                     <span>单</span>
               </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.willyanchifahuo}}</span>
                     <span>单</span>
               </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content">
                   <p>待支付</p>
                     <span>{{total.aldreayfahuo}}</span>
                     <span>单</span>
               </div>
            </el-col>
         </el-row>

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
      }

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
   .grid-content{
      padding-left: 20%;
      padding-top: 12px;
      p {
         color: #666666;
         line-height: 28px;
         height: 28px;
      }
   }

}

</style>
