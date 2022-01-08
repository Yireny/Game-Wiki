<template>
  <div class="card">
    <div class="card-user">
      <div class="card-user__frame">
        <img :src="post.avatar" alt="">
      </div>
      <div class="card-user__name">{{post.name}}</div>
      <div class="card-user__push-time">{{post.date}}</div>
    </div>
    <div class="card-content">
      <div class="card-content__title">{{post.title}}</div>
      <div class="card-content__content">{{post.content}}</div>
     <div v-show="post.img" class="card-content__img">
        <div class="card-content__img-wrap" v-for="(item,index) in post.img">
          <img :src="post.img[index]" alt="">
        </div>
      </div>
    </div>
    <div class="card-browse">
      <div class="card-browse__item">
        <span class="iconfont">&#xe622;</span>
        <span class="card-browse__text">{{post.view}}</span>
      </div>
      <div class="card-browse__item">
        <span class="iconfont">&#xe600;</span>
        <span class="card-browse__text">{{post.reply}}</span>
      </div>
      <div
      class="card-browse__item"
      :class="{'card-browse__item--active':isLike}"
      @click="like">
        <span class="iconfont">&#xec7f;</span>
        <span class="card-browse__text">{{post.like}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '@/utils/request'

  export default {
    name:'card',
    props: {
      post:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        isLike:false
      }
    },
    methods: {
      like(){
        this.isLike = !this.isLike
        if(this.isLike){
          post('/addPostLike',{...this.post})
          post('/addLike',{...this.$store.getters.getUser})
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.card{
  width: 100%;
  height: 300px;
  padding: 24px 30px;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba($color: #FFFFFF, $alpha: .7);
  box-sizing: border-box;
  &:last-child{
    border-bottom: none;
  }
}
.card-user{
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-bottom: 15px;
  &__frame{
    width: 36px;
    height: 36px;
    background-color: #fff;
    border-radius: 100%;
    & img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      border-radius: 100%;
    }
  }
  &__name{
    padding: 0 10px;
    line-height: 24px;
    font-size: 14px;
    color: #666;
  }
  &__push-time{
    line-height: 24px;
    font-size: 14px;
    color: #ccc;
  }
}
.card-content{
  width: 100%;
  height: 176px;
  &__title{
    display: flex;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-overflow: ellipsis;
    padding-bottom: 5px;
    // border-bottom: 1px solid rgba($color: #ccc, $alpha: .3);
  }
  &__content{
    width: 100%;
    font-size: 14px;
    color: #999;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 8px 0;
  }
  &__img{
    display: flex;
    height: 120px;
    &-wrap{
      position: relative;
      width: 120px;
      overflow: hidden;
      margin-right: 10px;
    }
    & img{
      position: absolute;
      left: 50%;
      transform: translateX(-40%);
      height: 120px;
      justify-content: center;
      border-radius: 5px;
      margin-right: 5px;
    }
  }
}
.card-browse{
  display: flex;
  width: 100%;
  height: 24px;
  justify-content: right;
  margin-top: 7px;
  padding-top: 5px;
  // border-top: 1px solid rgba($color: #ccc, $alpha: .3);
  &__item{
    width: 75px;
    height: 24px;
    .iconfont{
      color: #ccc;
    }
    &:nth-child(3){
      cursor: pointer;
    }
    &--active{
      .iconfont{
        color: #1890FF;
      }
      .card-browse__text{
        color: #1890FF;
      }
    }
  }
  &__text{
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
    color: #ccc;
  }
}
</style>