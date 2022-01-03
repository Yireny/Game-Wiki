<template>
  <div class="tabbar">
    <span
    class="tabbar__item"
    v-for="(item,index) in tabbar"
    :class="{'tabbar__item--active':isActive==index}"
    @click="tabClick(index)"
    >{{item}}</span>
  </div>
</template>

<script>
  export default {
    name:'tabbar',
    data () {
      return {
        isActive:0,
        tabbar:['推荐','热度','最新','与我相关']
      }
    },
    methods: {
      tabClick(index){
        this.isActive = index
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