<template>
  <div class="info">
      <div class="info__frame">
        <img :src="profile.frame" alt="">
      </div>
      <div class="info__detail">
        <div class="info__info">
          <div class="info__name">{{profile.name}}</div>
          <div class="info__id">id:{{profile.id}}</div>
        </div>
        <div class="info__signature">
          {{profile.signature}}
        </div>
        <div class="info__edit">编辑</div>
      </div>
      <div class="info__interaction">
        <div class="info__item">
          <div>{{post}}</div>
          <div class="info__item-text">发帖</div>
        </div>
        <div class="info__item">
          <div>{{reply}}</div>
          <div class="info__item-text">评论</div>
        </div>
        <div class="info__item">
          <div>{{profile.like}}</div>
          <div class="info__item-text">获赞</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'info',
    props:{
      profile:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      post(){
        if(this.profile.post){
          return this.profile.post.length 
        }
      },
      reply(){
        if(this.profile.reply){
          return this.profile.reply.length
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.info{
  width: 100%;
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  background-color:rgba(255, 255, 255, .7);
  border-radius: 10px;
  &__frame{
    width: 120px;
    height: 120px;
    margin-right: 40px;
    border-radius: 100%;
    background-color: #fff;
    & img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      border-radius: 100%;
    }
  }
  &__detail{
    width: 470px;
  }
  &__info{
    display: flex;
    height: 28px;
    line-height: 28px;
  }
  &__name{
    font-size: 16px;
    font-weight: 600;
    padding-right: 20px;
  }
  &__id{
    font-size: 12px;
    color: #ccc;
  }
  &__signature{
    width: 200px;
    height: 28px;
    font-size: 12px;
    color: #ccc;
    padding: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__edit{
    width: 86px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    color: #00b2ff;
    border: 1px solid #00b2ff;
    border-radius: 5px;
  }
  &__interaction{
    display: flex;
    align-items: center;
  }
  &__item{
    width: 100px;
    text-align: center;
    &-text{
      font-size: 14px;
      color: #999;
    }
  }
}
</style>