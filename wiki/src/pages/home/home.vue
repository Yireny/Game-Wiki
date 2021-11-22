<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
        <swiper :slide='slide'></swiper>
      </div>
      <div class="content__information">
        <card v-for="item in post" :key="item.id" :post='item'></card>
      </div>
    </div>
    <div class="aside">
      <information></information>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper'
  import Card from '@/components/card'
  import Information from '@/pages/home/components/information'
  import { get } from '@/utils/request'

  export default {
    name:'Home',
    components: {
      Swiper,
      Card,
      Information
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
.main{
  border-radius: 5px;
  display: flex;
}
.content{
  width: 700px;
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