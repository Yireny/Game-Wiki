<template>
  <div class="enemy-item">
    <img class="enemy-item__img" :src="enemy.avatar" alt="">
    <div class="enemy-item__content">
      <div class="content__item">
        <span>名称{{enemy.name}}</span>
        <span>地位{{enemy.type}}</span>
        <span>种族{{enemy.race}}</span>
      </div>
      <div class="content__item">
        <span>攻击力{{enemy.attribute.atk}}</span>
        <span>耐久{{enemy.attribute.hp}}</span>
        <span>防御力{{enemy.attribute.def}}</span>
        <span>法术抗性{{enemy.attribute.rgs}}</span>
      </div>
      <div class="content__item">特性{{enemy.features}}</div>
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
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__content{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .content{
      &__item{
        display: flex;
        width: 100%;
        padding-top: 10px;
        &:nth-child(1){
          height: 20px;
        }
        &:nth-child(2){
          height: 20px;
        }
        &:nth-child(3){
          min-height: 30px;
        }
        & span{
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