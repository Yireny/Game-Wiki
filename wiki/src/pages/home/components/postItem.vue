<template>
  <div class="card">
    <div class="user">
      <div class="user__frame">
        <img src="../../../assets/images/头像_早露_skin1.png" alt="">
      </div>
      <div class="user__id">玩家id</div>
      <div class="user__push-time">20小时前</div>
    </div>
    <div class="content">
      <div class="content__title">【公告】活动标题</div>
      <div class="content__content">内容内容内容内容内容内容</div>
      <div class="content__img"></div>
    </div>
    <div class="browse">
      <div class="browse__item">
        <span class="browse__icon browse__icon-views"></span>
        <span class="browse__text">10000</span>
      </div>
      <div class="browse__item">
        <span class="browse__icon browse__icon-comments"></span>
        <span class="browse__text">197</span>
      </div>
      <div class="browse__item">
        <span class="browse__icon browse__icon-like"></span>
        <span class="browse__text">3100</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'postItem',
  }
</script>

<style lang='scss' scoped>
.card{
  width: 700px;
  height: 300px;
  padding: 24px 30px;
  box-sizing: border-box;
}
.user{
  display: flex;
  width: 640px;
  height: 24px;
  margin-bottom: 15px;
  &__frame{
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 100%;
    & img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      border-radius: 100%;
    }
  }
  &__id{
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
.content{
  width: 640px;
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
    display: flex;
    width: 100%;
    line-height: 18px;
    margin-top: 8px;
  }
  &__img{
    display: flex;
    width: 120px;
    height: 120px;
  }
}
.browse{
  display: flex;
  width: 640px;
  height: 24px;
  justify-content: right;
  // margin-top: 7px;
  &__item{
    width: 75px;
    height: 24px;
  }
  &__icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    &-views{
      background: url('../../../assets/images/views.png');
      background-size: 100% 100%;
    }
    &-comments{
      background: url('../../../assets/images/comments.png');
      background-size: 100% 100%;
    }
    &-like{
      background: url('../../../assets/images/like.png');
      background-size: 100% 100%;
    }
  }
  &__text{
    display: inline-block;
    margin-left: 5px;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #ccc;
  }
}
</style>