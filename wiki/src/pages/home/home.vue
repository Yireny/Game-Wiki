<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
        <swiper></swiper>
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
  import Swiper from '../../components/swiper'
  import Card from '../../components/card'
  import Information from './components/information'
  import {GetPost} from '@/api/modules/post'

  export default {
    name:'Home',
    components: {
      Swiper,
      Card,
      Information
    },
    data () {
      return {
        post:[
          {
            id:1,
            time:'11.21',
            username:'username',
            frame:'/',
            title:'活动标题',
            content:'帖子内容',
            img1:'/',
            img2:'/',
            img3:'/',
            views:1000,
            comments:200,
            like:500
          },
          {
            id:2,
            time:'11.21',
            username:'玩家id2',
            frame:'/',
            title:'活动标题222',
            content:'帖子内容2222',
            img1:'/',
            img2:'/',
            img3:'/',
            views:222,
            comments:50,
            like:40
          }
        ]
      }
    },
    methods: {
      getPost(){
        GetPost().then(res=>{
          this.post=res.data
        })
      }
    },
    created () {
      this.getPost()
    }
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