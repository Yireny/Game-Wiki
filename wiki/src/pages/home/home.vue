<template>
  <div class="home">
    <div class="content">
      <div class="content__swiper">
        <swiper :slide='slide'></swiper>
      </div>
      <div class="content__information">
        <card v-for="item in post" :key="item.id" :post='item'></card>
      </div>
    </div>
    <div class="aside">
      <news></news>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import card from '@/components/card'
  import news from '@/pages/home/components/news'
  import { get } from '@/utils/request'

  export default {
    name:'home',
    components: {
      swiper,
      card,
      news
    },
    data () {
      return {
        post:[],
        slide:[]
      }
    },
    methods: {
      getHomeData(){
        get('/post',{}).then(res=>{
          this.post=res.data
        })
        get('/swiper',{}).then(res=>{
          this.slide=res.data
        })
      }
    },
    created () {
      this.getHomeData()
    },
  }
</script>

<style lang='scss' scoped>
.home{
  border-radius: 5px;
  display: flex;
}
.content{
  width: 700px;
  margin: 0 auto 0 0;
  &__swiper{
    width: 700px;
    height: 250px;
  }
  &__information{
    width: 100%;
    background-color: rgba(255, 255, 255,.7);
    border-radius: 10px;
  }
}
.aside{
  width: 280px;
}
</style>