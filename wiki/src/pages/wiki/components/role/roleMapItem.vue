<template>
  <div class="role-map-item">
    <div class="role-map-item__wrap">
      <img class="role-map-item__img" src="@/assets/images/头像_早露_skin1.png" alt="">
      <img class="role-map-item__occupation" src="" alt="">
      <img class="role-map-item__rarity" src="" alt="">
    </div>
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
    width: 120px;
    text-align: center;
  }
}
</style>