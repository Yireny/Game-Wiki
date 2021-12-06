<template>
  <div class="material-item">
    <div class="material-item__wrap">
      <img class="material-item__img" :src="material.avatar" alt="">
      <img class="material-item__occupation" src="" alt="">
      <img class="material-item__rarity" src="" alt="">
    </div>
    <div class="material-item__name">{{material.name}}</div>
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