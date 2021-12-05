<template>
  <div class="tabbar">
    <span class="tabbar__item" :class="{'tabbar__item--active':isActive}">推荐</span>
    <span class="tabbar__item">热度</span>
    <span class="tabbar__item">最新</span>
    <span class="tabbar__item">与我相关</span>
  </div>
</template>

<script>
  export default {
    name:'tabbar',
    data () {
      return {
        isActive:true
      }
    },
  }
</script>

<style lang='scss' scoped>
.tabbar{
  width: 100%;
  height: 44px;
  padding-left: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .7);
  &__item{
    position: relative;
    display: inline-block;
    width: 56px;
    line-height: 44px;
    font-size: 14px;
    text-align: center;
    margin-right: 20px;
    color: #99a2aa;
    cursor: pointer;
    &:hover{
      color: #00b5e5;
    }
    &::after{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transition: transform .5s;
      background-color: #00b5e5;
      content: '';
    }
    &--active{
      color: #00b5e5;
      &::after{
        transform: scaleX(1);
      }
    }
  }
}
</style>