<template>
  <div class="enemy">
    <enemy-item></enemy-item>
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

}
</style>