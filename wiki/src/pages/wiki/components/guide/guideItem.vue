<template>
  <div class="guide-item">
    <span class="guide-item__icon iconfont">&#xe67e;</span>
    <span class="guide-item__text">{{guideItem.text}}</span>
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
  position: relative;
  width: 150px;
  // height: 150px;
  padding: 10px 0;
  border-radius: 10px;
  background-color:rgba(255, 255, 255, 0.08);
  box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.08);
  font-size: 15px;
  text-align: center;
  color: #999;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: transform .3s;
  font-weight: 600;
  &:hover{
    transform: scale(1.05);
    background-color:rgba(255, 255, 255, 0.2);
    box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
  }
  &--active{
    transform: scale(1.1) !important;
    background-color:rgba(255, 255, 255, 0.2) ;
    box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
  }
}
</style>