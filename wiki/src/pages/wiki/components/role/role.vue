<template>
  <div class="role">
    <div class="role__screen">
      <div class="occupation">
        <span class="occupation__title">职业</span>
        <span
        class="occupation__item"
        v-for="(item,index) in occupation"
        :key="index"
        >
          {{item}}
        </span>
      </div>
      <div class="rarity">
        <span class="rarity__title">稀有度</span>
        <span
        class="rarity__item iconfont"
        :class="{'rarity__item--active':true}"
        v-for="index in 6"
        :key="index"
        >
        &#xe86a;
        </span>
        <span class="rarity__item">全部</span>
      </div>
    </div>
    <div class="role__wrap">
      <role-item class="role-item" v-for="index in 20" :key="index"></role-item>
    </div>
  </div>
</template>

<script>
import roleItem from './roleItem'

  export default {
    name:'roleMap',
    components: {
      roleItem
    },
    data () {
      return {
        star:2,
        occupation:['先锋','近卫','狙击','重装','医疗','辅助','术师','特种']
      }
    }
  }
</script>

<style lang='scss' scoped>
.role{
  &__screen{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
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
  .occupation{
    margin-bottom: 10px;
    &__title{
      font-size: 20px;
      margin-right: 40px;
    }
    &__item{
      border: 1px solid #fff;
      margin-right: 10px;
    }
  }
  .rarity{
    &__title{
      font-size: 20px;
      margin-right: 20px;
    }
    &__item{
      margin-right: 10px;
      color: #999;
      cursor: pointer;
      &--active{
        color: #FEDE04;
      }
    }
  }
}
</style>