<template>
  <div class="show-fashion">
    <div class="show-fashion__painting">
      <img :src="fashion.painting" alt="">
    </div>
    <div class="show-fashion__description">{{fashion.description}}</div>
    <div class="show-fashion__icon" @click="closeItem"></div>
  </div>
</template>

<script>
  export default {
    name:'showFashion',
    props: {
      fashion:{
        type:Object,
        default(){
          return {}
        }
      },
      itemClick:{
        type:Function,
        require:true,
        default:null
      }
    },
    methods: {
      closeItem(){
        this.itemClick()
      }
    }
  }
</script>

<style lang='scss' scoped>
.show-fashion{
  position: relative;
  width: 300px;
  background-color: #fff;
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  color: #5b5b5b !important;
  cursor: auto;
  &__painting{
    width: 100%;
    height: auto;
    & img{
      width: 100%;
      height: 100%;
    }
  }
  &__description{
    padding: 5px;
    font-size: 14px;
    border-top: 1px solid #BFBFBF;
  }
  &__icon{
      position: absolute;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      background: url('~@/assets/images/fork-black.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
}
</style>