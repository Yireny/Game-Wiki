<template>
  <div class="publish">
    <div class="publish__title">选择话题</div>
    <m-input></m-input>
    <div class="publish__toolbar">
      <div>
        <span class="publish__tools iconfont">&#xe601;</span>
        <span class="publish__tools iconfont">&#xe8ba;</span>
      </div>
      <div class="publish__btn">发布</div>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-input' 

  export default {
    name:'publish',
    components:{
      mInput
    }
  }
</script>

<style lang='scss' scoped>
.publish{
  width: 100%;
  padding: 24px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgba($color: #fff, $alpha: .7);
  &__title{
    height: 24px;
    color: #99a2aa;
  }
 
  &__toolbar{
    display: flex;
    justify-content: space-between;
    height: 32px;
    margin-top: 16px;
  }
  &__tools{
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 24px;
    color: #999;
    margin-right: 10px;
    cursor: pointer;
  }
  &__btn{
    width: 70px;
    height: 32px;
    font-size: 13px;
    background-color: #00a1d6;
    line-height: 32px;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    opacity: .5;
    // cursor: not-allowed;
  }
}
</style>