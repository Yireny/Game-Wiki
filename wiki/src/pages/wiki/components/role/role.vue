<template>
  <div class="role">
    <div class="role__screen">
      <div class="occupation">
        <span class="occupation__title">职业</span>
        <span
        class="occupation__item"
        :class="{'occupation__item--active':index==occID}"
        v-for="(item,index) in occupation"
        :key="index"
        @click="occScreen(item,index)"
        >
          {{item}}
        </span>
      </div>
      <div class="rarity">
        <span class="rarity__title">稀有度</span>
        <span
        class="rarity__item iconfont"
        :class="{'rarity__item--active':index == rarID}"
        v-for="(item,index) in rarity"
        :key="index"
        @click="rarScreen(index)"
        >
        {{item}}
        <!-- &#xe86a; -->
        </span>
      </div>
    </div>
    <div class="role__wrap" v-show="!showRole">
      <role-item
      class="role-item"
      v-for="(item,index) in roleScreen"
      :key="index"
      :role='item'
      @click.native="showDetail(item.id);"
      >
      </role-item>
    </div>
    <show-role
    v-show="showRole"
    class="role__detail"
    :hideDetail='showDetail'
    :role='roleMsg'
    ></show-role>
  </div>
</template>

<script>
import roleItem from './roleItem'
import showRole from './showRole'
import {get} from '@/utils/request'

  export default {
    name:'roleMap',
    components: {
      roleItem,
      showRole,
    },
    data () {
      return {
        showRole:false,
        occupation:['全选','先锋','近卫','狙击','重装','医疗','辅助','术师','特种'],
        rarity:['全选','⭐1','⭐2','⭐3','⭐4','⭐5','⭐6'],
        role:[],
        roleScreen:[],
        roleMsg:{},
        occID:0,
        rarID:0
      }
    },
    computed: {
      
    },
    methods: {
      getRoleData(){
        get('/roles',{}).then(res=>{
          this.role=res.data.data
          this.roleScreen = this.role.reverse()
        })
      },
      showDetail(id){
        this.showRole = !this.showRole
        if(this.showRole){
          this.roleMsg = this.role.filter(item => item.id == id)[0]
        }
      },
      occScreen(occ,index){
        if(occ=='全选'){
          this.roleScreen = this.role
        }else{
          this.roleScreen = this.role.filter(item=>item.occupation == occ)
        }
        this.occID = index
        this.rarID = 0
      },
      rarScreen(index){
        if(index == 0){
          this.roleScreen = this.role
        }else{
          this.roleScreen = this.role.filter(item =>item.rarity==index)
        }
        this.rarID = index
        this.occID = 0
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
    grid-template-columns: repeat(auto-fit,125px);
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
      border: 1px solid #ccc;
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
      margin-right: 25px;
    }
    &__item{
      display: inline-block;
      width: 40px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      font-size: 14px;
      background-color: rgba($color: #FFFFFF, $alpha: .08);
      border: 1px solid #ccc;
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
}
</style>