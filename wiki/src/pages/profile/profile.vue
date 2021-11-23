<template>
  <div class="profile">
    <info></info>
    <record></record>
  </div>
</template>

<script>
import info from './components/info'
import record from './components/record'

  export default {
    name:'profile',
    components: {
      info,
      record
    },
  }
</script>

<style lang='scss' scoped>

</style>