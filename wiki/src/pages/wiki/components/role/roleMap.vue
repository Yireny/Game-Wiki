<template>
  <div class="role-map">
    <div class="role-map__screen">
      <div class="role-map__rarity">
        <span>稀有度</span>
      </div>
      <div class="role-map__occupation">
        <span>职业</span>
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