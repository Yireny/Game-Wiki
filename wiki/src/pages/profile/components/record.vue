<template>
  <div class="personal-record">
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from '../../../components/card'

  export default {
    name:'PersonalRecord',
    components:{
      Card
    }
  }
</script>

<style lang='scss' scoped>
.personal-record{
  width: 100%;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 10px;
}
</style>