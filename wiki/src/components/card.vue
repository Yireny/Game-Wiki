<template>
  <div class="card">
    <div class="card-user">
      <div class="card-user__frame">
        <img :src="post.frame" alt="">
      </div>
      <div class="card-user__name">{{post.name}}</div>
      <div class="card-user__push-time">{{post.time}}</div>
    </div>
    <div class="card-content">
      <div class="card-content__title">{{post.title}}</div>
      <div class="card-content__content">{{post.content}}</div>
     <div class="card-content__img">
        <img v-if="post.img1" :src="post.img1" alt="">
        <img v-if="post.img2" :src="post.img2" alt="">
        <img v-if="post.img3" :src="post.img3" alt="">
      </div>
    </div>
    <div class="card-browse">
      <div class="card-browse__item">
        <span class="iconfont">&#xe622;</span>
        <span class="card-browse__text">{{post.views}}</span>
      </div>
      <div class="card-browse__item">
        <span class="iconfont">&#xe600;</span>
        <span class="card-browse__text">{{post.comments}}</span>
      </div>
      <div class="card-browse__item">
        <span class="iconfont">&#xec7f;</span>
        <span class="card-browse__text">{{post.like}}</span>
      </div>
    </div>
  </div>
</template>

<script>
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
    padding-right: 100px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-overflow: ellipsis;
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
    overflow: hidden;
    & img{
      width: 120px;
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
  &__item{
    width: 75px;
    height: 24px;
    .iconfont{
      color: #ccc;
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