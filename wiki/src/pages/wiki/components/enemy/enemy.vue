<template>
  <div class="enemy">
    <div class="enemy__wrap">
      <enemy-item v-for="index in 20" :key="index"></enemy-item>
    </div>
  </div>
</template>

<script>
import enemyItem from './enemyItem'

  export default {
    name:'enemy',
    components: {
      enemyItem
    }
  }
</script>

<style lang='scss' scoped>
.enemy{
  width: 100%;
  height: 700px;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-gap: 10px;
  }
}
</style>