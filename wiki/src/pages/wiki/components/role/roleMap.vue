<template>
  <div class="role-map">
    <div class="role-map__screen">
      <div class="role-map__occupation">
        <span>职业</span>
        <span>先锋</span>
        <span>近卫</span>
        <span>狙击</span>
        <span>重装</span>
        <span>医疗</span>
        <span>辅助</span>
        <span>术师</span>
        <span>特种</span>
      </div>
      <div class="role-map__rarity">
        <span>稀有度</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>全部</span>
      </div>
    </div>
    <div class="role-map__wrap">
      <role-map-item class="role-map-item" v-for="item in 20"></role-map-item>
    </div>
  </div>
</template>

<script>
import roleMapItem from './roleMapItem'

  export default {
    name:'roleMap',
    components: {
      roleMapItem
    }
  }
</script>

<style lang='scss' scoped>
.role-map{
  padding: 20px;
  &__screen{
    width: 100%;
  }
  &__wrap{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
  }
  &-item{
    margin-bottom: 20px;
    margin-right: 20px;
    &:nth-child(7n){
      margin-right: 0;
    }
  }
}
</style>