<template>
  <div class="fashion">
    <div class="fashion__wrap">
      <fashion-item v-for="index in 20" :key="index"></fashion-item>
    </div>
  </div>
</template>

<script>
import fashionItem from './fashionItem'

  export default {
    name:'fashion',
    components: {
      fashionItem
    }
  }
</script>

<style lang='scss' scoped>
.fashion{
  width: 100%;
  height: 700px;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-gap: 10px;
  }
}
</style>