<template>
  <div class="reply">
    <div class="reply__user">
      <div class="reply__avatar">
        <img :src="reply.avatar" alt="">
      </div>
      <div class="reply__name">{{reply.name}}</div>
      <div class="reply__date">{{reply.date}}</div>
    </div>
    <div class="reply__content">{{reply.content}}</div>
    <div class="reply__img"></div>
  </div>
</template>

<script>

  export default {
    name:'reply',
    props:{
      postReply:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      reply(){
        return this.postReply
      }
    }
  }
</script>

<style lang='scss' scoped>
.reply{
  width: 100%;
  &__user{
    display: flex;
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
}
</style>