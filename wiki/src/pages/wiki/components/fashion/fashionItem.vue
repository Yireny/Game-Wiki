<template>
  <div class="fashion-item">
    <img class="fashion-item__img" :src="fashion.avatar" alt="">
    <div class="fashion-item__content">
      <div>11111</div>
      <div>22222</div>
      <div>33333</div>
    </div>
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
  display: flex;
  height: 120px;
  background-color: rgba($color: #fff, $alpha: .1);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__content{
    height: 100%;
  }
  &__img{
    border-radius: 5px;
    width: auto;
    height: 100%;
  }
}
</style>