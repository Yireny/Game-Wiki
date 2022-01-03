<template>
  <div class="enemy-item">
    <img class="enemy-item__img" :src="enemy.avatar" alt="">
    <div class="enemy-item__content">
      <div class="content__item">
        <span>{{enemy.name}}</span>
        <span>{{enemy.type}}</span>
        <span>{{enemy.race}}</span>
      </div>
      <div class="content__item">
        <span>攻击力{{enemy.attribute.atk}}</span>
        <span>耐久{{enemy.attribute.hp}}</span>
        <span>防御力{{enemy.attribute.def}}</span>
        <span>法术抗性{{enemy.attribute.rgs}}</span>
      </div>
      <div class="content__item">{{enemy.features}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'enemyItem',
    props:{
      enemy:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.enemy-item{
  display: flex;
  height: 120px;
  background-color: rgba($color: #fff, $alpha: .1);
  box-shadow: 5px 5px 5px rgba(9, 33, 58, 0.4);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__content{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-left: 1px solid #999;
    .content{
      overflow-x: scroll;
      &__item{
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding-left: 5px;
        &:nth-child(1){
          height: 30px;
          line-height: 20px;
          padding: 5px 0;
          padding-left: 5px;
          border-bottom: 1px solid #999;
        }
        &:nth-child(2){
          height: 30px;
          line-height: 20px;
          padding: 5px 0;
        padding-left: 5px;
          border-bottom: 1px solid #999;
        }
        &:nth-child(3){
          min-height: 30px;
          padding-left: 5px;
        }
        & span{
          display: inline-block;
          flex: 1;
        }
      }
    }
    &::-webkit-scrollbar{
      display: none;
    }
  }
  &__img{
    border-radius: 5px;
    width: auto;
    height: 100%;
  }
}
</style>