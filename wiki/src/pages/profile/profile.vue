<template>
  <div class="profile">
    <personal-data></personal-data>
    <div class="record">
      <card></card>
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from '../../components/card.vue'
import PersonalData from './components/personalData'

  export default {
    name:'Profile',
    components: {
      PersonalData,
      Card
    }
  }
</script>

<style lang='scss' scoped>
.profile{
  border-radius: 10px;
}

.record{
  width: 100%;
  height: 600px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 10px;
}
</style>