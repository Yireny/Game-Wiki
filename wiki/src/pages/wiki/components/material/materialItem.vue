<template>
  <div class="material-item">
    <div class="material__name">{{material.name}}</div>
    <div class="material__wrap">
      <img class="material__img" :src="material.img" alt="">
      <div class="material__content">
        <div class="material__use">
          <div class="material__title">用途</div>
          <div class="material__text">{{material.use}}</div>
        </div>
        <div class="material__description">
          <div class="material__title">描述</div>
          <div class="material__text">{{material.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'materialItem',
    props:{
      material:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.material-item{
  // height: 150px;
  background-color: rgba($color: #fff, $alpha: .1);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  .material{
    &__name{
      text-align: center;
      background-color: aqua;
    }
    &__wrap{
      display: flex;
    }
    &__img{
      border-radius: 5px;
      width: 150px;
      height: 150px;
    }
    &__content{
      text-align: center;
    }
  }
}
</style>