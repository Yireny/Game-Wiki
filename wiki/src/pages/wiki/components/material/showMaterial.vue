<template>
<!-- <div class="wrapper"> -->
  <div class="material-detail">
    <div class="material__name" :style="bg_color">{{material.name}}</div>
    <div class="material__icon" @click="closeItem"></div>
    <div class="material__wrap">
      <img class="material__img" :src="material.img" alt="">
      <div class="material__content">
        <div class="material__item">
          <div class="material__title">用途</div>
          <div class="material__text">{{material.use}}</div>
        </div>
        <div class="material__item">
          <div class="material__title">描述</div>
          <div class="material__text">{{material.description}}</div>
        </div>
      </div>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
  export default {
    name:'showMaterial',
    props:{
      material:{
        type:Object,
        default(){
          return {}
        }
      },
      itemClick:{
        type:Function,
        require:true,
        default:null
      }
    },
    computed: {
      bg_color(){
        return this.color(this.material.grade)
      }
    },
    methods: {
      color(index){
        switch(index){
          case '1':
            return 'background-color: #808080'
          case '2':
            return 'background-color: #d3db2e'
          case '3':
            return 'background-color: #09b3f7'
          case '4':
            return 'background-color: #d8b3d8'
          case '5':
            return 'background-color: #ffc802'
        }
      },
      closeItem(){
        this.itemClick()
      }
    }
  }
</script>

<style lang='scss' scoped>
.material-detail{
  position: relative;
  width: 700px;
  // height: 300px;
  background-color: #fff;
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  .material{
    &__name{
      text-align: center;
      color: #fff;
      font-weight: bold;
      padding: 5px 0;
    }
    &__icon{
      position: absolute;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      background: url('~@/assets/images/fork.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    &__wrap{
      display: flex;
    }
    &__img{
      width: auto;
      height: 100%;
      padding: 10px;
      border-right: 1px solid #999;
    }
    &__content{
      flex: 1;
      text-align: center;
    }
    &__item{
      &:nth-child(1){
        height: 40%;
      }
    }
    &__title{
      color: #141414;
      font-weight: bold;
      padding: 5px 0;
      background-color: #eaebee;
      border-bottom: 1px solid #999;
    }
    &__text{
      padding: 10px ;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>