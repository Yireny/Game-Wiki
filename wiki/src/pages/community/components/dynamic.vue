<template>
  <div class="dynamic">
    <label></label>
    <card></card>
  </div>
</template>

<script>
import label from './label'
import card from '@/components/card'

  export default {
    name:'dynamic',
    components:{
      label,
      card
    }
  }
</script>

<style lang='scss' scoped>
.dynamic{
  width: 100%;
}
</style>