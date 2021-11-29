<template>
  <div class="guideItem">
    <div>{{guideItem.title}}</div>
  </div>
</template>

<script>
  export default {
    name:'guideItem',
    props:{
      guideItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.guideItem{
  width: 180px;
  height: 155px;
  border-radius: 10px;
  background-color: rgba(225, 225, 225, 0.5);
}
</style>