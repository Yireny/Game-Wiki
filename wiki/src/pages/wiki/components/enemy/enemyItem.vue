<template>
  <div class="enemy-item">
    <img class="enemy-item__img" :src="enemy.avatar" alt="">
    <div class="enemy-item____content">
      <div class="">名称</div>
      <div class="">属性</div>
      <div class="">特性</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'enemyItem',
    props:{
      enemy:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.enemy-item{
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