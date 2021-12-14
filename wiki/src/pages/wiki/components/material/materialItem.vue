<template>
  <div class="material-item">
    <img class="material-item__img" :src="material.avatar" alt="">
    <div class="material-item__content">
      <div class="">道具名</div>
      <div class="">获取方式</div>
      <div class="">描述。。。。。。。。。。。。。。描述</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'materialItem',
    props:{
      material:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.material-item{
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