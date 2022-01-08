<template>
  <div class="strategy">
    <div class="strategy__nav">
      <div class="strategy__nav-item" v-for="(item,index) in type" :key="index">{{item}}</div>
    </div>
    <div class="strategy__list">
      <div class="strategy__item" v-for="(item,index) in strategy[0].list" :key="index">
        <span>活动</span>
        {{item}}
      </div>
    </div>
    <div class="strategy__list">
      <div class="strategy__item" v-for="(item,index) in strategy[1].list" :key="index">
        <span>干员</span>
        {{item}}
      </div>
    </div>
    <div class="strategy__list">
      <div class="strategy__item" v-for="(item,index) in strategy[2].list" :key="index">
        <span>关卡</span>
        {{item}}
      </div>
    </div>
    <div class="strategy__list">
      <div class="strategy__item" v-for="(item,index) in strategy[3].list" :key="index">
        <span>考据</span>
        {{item}}
      </div>
    </div>
    <div class="strategy__list">
      <div class="strategy__item" v-for="(item,index) in strategy[4].list" :key="index">
        <span>新人</span>
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'

  export default {
    name:'strategy',
    data() {
      return {
        all:[],
        strategy:[],
        type:['活动','干员','关卡','考据','新人']
      }
    },
    methods: {
      getStrategy(){
        get('/strategy',{}).then(res=>{
          this.strategy = res.data.data
          console.log(this.strategy)
        })
      }
    },
    mounted() {
      this.getStrategy()
    },
  }
</script>

<style lang='scss' scoped>
.strategy{
  background-color: rgba($color: #FFFFFF, $alpha: .7);
  border-radius: 10px;
  padding: 20px;
  &__nav{
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    &-item{
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color:rgba(255, 255, 255, 0.2);
      box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.08);
      border-radius: 10px;
      transition: transform .3s;
      &:hover{
        transform: scale(1.05);
        background-color:rgba(255, 255, 255, 0.2);
        box-shadow: 0px 5px 16px rgba(9, 33, 58, 0.16);
      }
    }
  }
  &__list{
    padding-left: 20px;
    line-height: 35px;
    &:nth-child(2){
      & span{
        background-color: #96dc85;
      }
    }
    &:nth-child(3){
      & span{
        background-color: #656f82;
      }
    }&:nth-child(4){
      & span{
        background-color: #e8aa6a;
      }
    }&:nth-child(5){
      & span{
        background-color: #6089F6;
      }
    }&:nth-child(6){
      & span{
        background-color: #00B6FF;
      }
    }
  }
  &__item{
    color: #1890FF;
    & span{
      display: inline-block;
      width: 32px;
      height: 22px;
      font-size: 12px;
      text-align: center;
      line-height: 22px;
      color: #FFFFFF;
      margin-right: 20px;
      border-radius: 5px;
    }
  }
}
</style>