<template>
  <div class="enemy-item">
    <div>敌人信息</div>
  </div>
</template>

<script>
  export default {
    name:'enemyItem'
  }
</script>

<style lang='scss' scoped>
.enemy-item{
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