<template>
  <div class="personal-data">
      <div class="personal-data__frame">
        <img src="../../../assets/images/头像_早露_skin1.png" alt="">
      </div>
      <div class="personal-data__detail">
        <div class="personal-data__info">
          <div class="personal-data__username">用户名</div>
          <div class="personal-data__userid">id:19919919</div>
        </div>
        <div class="personal-data__signature">
          个性签名个性签名个性签名个性签名
        </div>
        <div class="personal-data__edit">编辑</div>
      </div>
      <div class="personal-data__interaction">
        <div class="personal-data__item">
          <div>0</div>
          <div>发帖</div>
        </div>
        <div class="personal-data__item">
          <div>0</div>
          <div>评论</div>
        </div>
        <div class="personal-data__item">
          <div>0</div>
          <div>获赞</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'PersonalData'
  }
</script>

<style lang='scss' scoped>
.personal-data{
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
  &__username{
    font-size: 16px;
    font-weight: 600;
    padding-right: 20px;
  }
  &__userid{
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
  }
}
</style>