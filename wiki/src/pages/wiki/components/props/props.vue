<template>
  <div class="props">
    <div class="props__wrap">
      <props-item v-for="index in 20" :key="index"></props-item>
    </div>
  </div>
</template>

<script>
import propsItem from './propsItem'

  export default {
    name:'props',
    components: {
      propsItem
    }
  }
</script>

<style lang='scss' scoped>
.props{
  width: 100%;
  height: 700px;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-gap: 10px;
  }
}
</style>