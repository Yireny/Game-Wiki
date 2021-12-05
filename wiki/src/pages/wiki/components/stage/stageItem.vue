<template>
  <div class="stage-item">
    <div>关卡</div>
  </div>
</template>

<script>
  export default {
    name:'stageItem'
  }
</script>

<style lang='scss' scoped>
.stage-item{
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