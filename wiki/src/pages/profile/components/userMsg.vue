<template>
  <div class="user-msg">
    <div class="user-msg__avatar">
      <img :src="user.avatar" alt="">
      <div class="avatar__wrap" v-show="showAvatar">
        <div class="avatar__item" v-for="(item,index) in avatar[0].avatar" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="user-msg__btn-ava" @click="show">更换头像</div>
    </div>
    <div class="user-msg__aside">
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'

  export default {
    name:'userMsg',
    data() {
      return {
        user:{},
        avatar:[],
        showAvatar:false
      }
    },
    methods: {
      getAvatar(){
        get('/avatar',{}).then(res=>{
          this.avatar = res.data.data
          console.log(this.avatar)
        })
      },
      show(){
        this.showAvatar = !this.showAvatar
      }
    },
    mounted() {
      this.user = this.$store.getters.getUser
      this.getAvatar()
    },
  }
</script>

<style lang='scss' scoped>
.user-msg{
  display: flex;
  width: 100%;
  height: calc( 100vh - 400px);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-sizing: border-box;
  &__avatar{
    position: relative;
    width: 100px;
    padding-top: 50px;
    & img{
      width: 100%;
      height: auto;
      border-radius: 50%;
      background-color: #fff;
    }
    .avatar__wrap{
      position: absolute;
      top: 10%;
      left: 120%;
      display: grid;
      grid-template-columns: repeat(auto-fit,100px);
      grid-template-rows: 100px;
      grid-gap: 20px;
      width: 400px;
      height: 250px;
      padding: 20px;
      background-color: rgba($color: #ccc, $alpha: .5);
      border-radius: 5px;
      box-sizing: border-box;
      overflow-y: scroll;
      z-index: 3;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    .avatar__item{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    
      & img{
        width: 100%;
        height: 100%;
      }
    }
  }
  &__btn-ava{
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    color: #00b2ff;
    margin-top: 20px;
    margin-left: 10px;
    border: 1px solid #00b2ff;
    border-radius: 0.3125rem;
    cursor: pointer;
  }
}
</style>