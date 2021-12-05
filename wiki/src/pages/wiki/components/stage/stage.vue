<template>
  <div class="stage">
    <div class="stage__wrap">
      <stage-item v-for="index in 20" :key="index"></stage-item>
    </div>
  </div>
</template>

<script>
import stageItem from './stageItem'

  export default {
    name:'stage',
    components: {
      stageItem
    }
  }
</script>

<style lang='scss' scoped>
.stage{
  width: 100%;
  height: 700px;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-gap: 10px;
  }
}
</style>