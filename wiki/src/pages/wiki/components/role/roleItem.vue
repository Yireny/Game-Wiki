<template>
  <div class="role-item">
    <div class="role-item__wrap">
      <img class="role-item__img" :src="role.avatar" alt="">
      <img class="role-item__occupation" src="" alt="">
      <img class="role-item__rarity" src="" alt="">
    </div>
    <div class="role-item__name">{{role.name}}</div>
  </div>
</template>

<script>
  export default {
    name:'roleItem',
    props:{
      role:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.role-item{
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