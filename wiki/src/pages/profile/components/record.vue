<template>
  <div class="profile-record">
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
.profile-record{
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
}
</style>