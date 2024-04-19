<template>
  <div class="home">
    
    <head-vue></head-vue>
    <homepage-contain></homepage-contain>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadVue from '../views/HeadPart.vue'
import HomepageContain from '../views/HomeView/HomepageContain.vue'
export default {
  name: 'HomeView',
  components: {
    HeadVue,HomepageContain
  }
}
</script>
<style lang="scss" scoped>
             .home{
              height: auto;
              width: 100%;
              //  background: linear-gradient(circle,  0%,  100%);
              // background:radial-gradient(circle,#305993,#213a5c);
           background-color: #FAF9DE;

             }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
</style>
