<template>
  <div class="home">
    <Header/>
    <v-sidebar />
    <div class="content-box" >
        <div class="content">
            <router-view v-slot="{ Component }">

                    <!-- <keep-alive> -->
                        <component :is="Component" />
                    <!-- </keep-alive> -->
            </router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import vSidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: {
    Header,
    vSidebar
  }
}
</script>
