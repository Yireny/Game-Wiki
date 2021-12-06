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
      <role-item
      class="role-item"
      v-for="(item,index) in role"
      :key="index"
      :role='item'
      >
      </role-item>
    </div>
  </div>
</template>

<script>
import roleItem from './roleItem'
import {get} from '@/utils/request'

  export default {
    name:'roleMap',
    components: {
      roleItem
    },
    data () {
      return {
        star:2,
        occupation:['全选','先锋','近卫','狙击','重装','医疗','辅助','术师','特种'],
        role:[]
      }
    },
    methods: {
      getRoleData(){
        get('/role',{}).then(res=>{
          this.role=res.data
        })
      }
    },
    created () {
      this.getRoleData()
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
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
  }

  .occupation{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &__title{
      font-size: 14px;
      margin-right: 40px;
    }
    &__item{
      display: inline-block;
      width: 40px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      font-size: 14px;
      background-color: rgba($color: #FFFFFF, $alpha: .08);
      border: 1px solid #fff;
      border-radius: 3px;
      margin-right: 10px;
      cursor: pointer;
      &:hover{
        color: #00c3ff;
        border-color: #00c3ff;
      }
      &--active{
        color: #FFFFFF !important;
        background-color: #00c3ff;
        border-color: #00c3ff;
      }
    }
  }
  .rarity{
    &__title{
      font-size: 14px;
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