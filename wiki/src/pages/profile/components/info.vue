<template>
  <div class="info">
      <div class="info__frame">
        <img :src="user.avatar" alt="">
      </div>
      <div class="info__detail">
        <div class="info__info">
          <div class="info__name">{{user.name}}</div>
          <div class="info__id">id:{{user.id}}</div>
        </div>
        <div class="info__signature">
          {{user.sign}}
        </div>
        <div class="info__edit" @click="">编辑</div>
      </div>
      <div class="info__interaction">
        <div class="info__item">
          <div>{{user.post}}</div>
          <div class="info__item-text">发帖</div>
        </div>
        <div class="info__item">
          <div>{{user.reply}}</div>
          <div class="info__item-text">评论</div>
        </div>
        <div class="info__item">
          <div>{{user.like}}</div>
          <div class="info__item-text">获赞</div>
        </div>
      </div>
  </div>
</template>

<script>
import { post } from '@/utils/request'

  export default {
    name:'info',
    props:{
      userMsg:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        // user: this.userMsg
        user:{}
      }
    },
    mounted() {
      this.user = this.$store.getters.getUser
    },
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