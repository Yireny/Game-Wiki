<template>
  <div class="fashion-item">
    <div class="fashion-item__wrap">
      <img class="fashion-item__img" :src="fashion.avatar" alt="">
      <img class="fashion-item__occupation" src="" alt="">
      <img class="fashion-item__rarity" src="" alt="">
    </div>
    <div class="fashion-item__name">{{fashion.name}}</div>
  </div>
</template>

<script>
  export default {
    name:'fashionItem',
    props:{
      fashion:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.fashion-item{
  // width: 120px;
  background-color: rgba($color: #fff, $alpha: .1);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__wrap{
    margin: 2px;
    border: 1px solid rgba($color: #fff, $alpha: .5);
    border-radius: 5px;
  }
  &__img{
    width: 100%;
    height: 100%;
  }
  &__name{
    width: 100%;
    text-align: center;
  }
}
</style>