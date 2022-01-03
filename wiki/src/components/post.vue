<template>
  <div class="post" v-if="postDetail">
    <div class="post__back" @click="closePost"></div>
    <div class="post__header">
      <div class="post__user">
        <div class="post__avatar">
          <img :src="post.avatar" alt="">
        </div>
        <div class="post__name">{{post.name}}</div>
        <div class="post__date">{{post.date}}</div>
      </div>
      <div class="post__main">
        <div class="post__title">{{post.title}}</div>
        <div class="post__content">{{post.content}}</div>
        <div v-show="post.img" class="post__img">
            <img v-for="(item,index) in post.img" :src="post.img[index]" alt="">
          </div>
        </div>
    </div>
    <div class="post__wrap">
      <reply></reply>
    </div>
  </div>
</template>

<script>
import reply from './reply'

  export default {
    name:'post',
    components:{
      reply
    },
    props:{
      postDetail:{
        type:Object,
        default(){
          return {}
        }
      },
      showPost:{
        type:Function,
        require:true,
        default:null
      }
    },
    data() {
      return {
        post:this.postDetail
      }
    },
    methods: {
      closePost(){
        this.showPost()
      }
    }
  }
</script>

<style lang='scss' scoped>
.post{
  background-color: rgba($color: #fff, $alpha: .7);
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  &__back{
    width: 200px;
    height: 100px;
    border: 1px solid #333;
  }
  &__header{
    width: 100%;
  }
  &__user{
    display: flex;
    align-items: center;
  }
  &__avatar{
    width: 45px;
    height: 45px;
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
  &__date{
    line-height: 24px;
    font-size: 14px;
    color: #ccc;
  }
  &__main{
  width: 100%;
  }
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
</style>