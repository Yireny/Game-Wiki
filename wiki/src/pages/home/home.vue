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
      <home-news></home-news>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import card from '@/components/card'
  import homeNews from '@/pages/home/components/homeNews'
  import { get } from '@/utils/request'

  export default {
    name:'home',
    components: {
      swiper,
      card,
      homeNews
    },
    data () {
      return {
        post:[],
        slide:[]
      }
    },
    methods: {
      getHomeData(){
        get('/posts',{}).then(res=>{
          this.post=res.data.data
        })
        get('/swiper',{}).then(res=>{
          this.slide=res.data
        })
        get('/users',{}).then(res=>{
          // console.log('1')
          // console.log(res.data)
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
  display: flex;
}
.content{
  width: 700px;
  margin-right: auto;
  &__swiper{
    width: 700px;
    height: 250px;
  }
  &__information{
    width: 100%;
    border-radius: 10px;
  }
}
.aside{
  width: 280px;
}
</style>