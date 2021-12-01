<template>
  <div class="dynamic">
    <tabbar class="dynamic__tabbar"></tabbar>
    <card></card>
  </div>
</template>

<script>
import tabbar from './tabbar'
import card from '@/components/card'

  export default {
    name:'dynamic',
    components:{
      tabbar,
      card,
    }
  }
</script>

<style lang='scss' scoped>
.dynamic{
  width: 100%;
  &__tabbar{
    margin-bottom: 1px;
  }
}
</style>