<template>
  <div class="guide-item">
    <!-- <img class="guide-item__bg" src="@/assets/images/Mpbuttons_01.png" alt=""> -->
    <div class="guide-item__icon iconfont">&#xe60c;</div>
    <div class="guide-item__text">{{guideItem.text}}</div>
  </div>
</template>

<script>
  export default {
    name:'guideItem',
    props:{
      guideItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.guide-item{
  width: 150px;
  height: 130px;
  border-radius: 10px;
  // background-color: rgba($color: #FFFFFF, $alpha: .7);
  box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.08);
  font-size: 24px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform .3s;
  &__bg{
    display: block;
    width: 96px;
    height: 96px;
    background: url('~@/assets/images/Mpbuttons_01.png');
  }
  &__icon{
    font-size: 40px;
  }
  &__text{
    display: block;
  }
  &:hover{
    color: #00b5e5;
    transform: scale(1.05);
    background-color:rgba(225, 225, 225, 0.8) ;
  }
  &--active{
    transform: scale(1.1) !important;
    color: #00b5e5;
    background-color:rgba(225, 225, 225, 0.8) ;
    box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
  }
}
</style>