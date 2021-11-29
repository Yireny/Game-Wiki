<template>
  <div class="guide">
    <guide-item
    v-for="item in guide"
    :key="item.index"
    :guideItem='item'
    >
    </guide-item>
  </div>
</template>

<script>
import guideItem from './guideItem'

  export default {
    name:'guide',
    components: {
      guideItem
    },
    props:{
      guide:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.guide{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
</style>