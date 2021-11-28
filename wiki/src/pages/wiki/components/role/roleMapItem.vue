<template>
  <div class="role-map-item">
    <img class="role-map-item__img" src="@/assets/images/头像_早露_skin1.png" alt="">
    <div class="role-map-item__name">早露</div>
  </div>
</template>

<script>
  export default {
    name:'roleMapItem'
  }
</script>

<style lang='scss' scoped>
.role-map-item{
  width: 120px;
  background-color: rgba($color: #fff, $alpha: .1);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__img{
    width: 120px;
    height: 120px;
  }
  &__name{
    width: 120px;
    text-align: center;
  }
}
</style>