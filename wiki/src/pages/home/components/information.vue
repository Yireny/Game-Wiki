<template>
  <div class="information">
    <div class="banner"></div>
    <div class="news"></div>
  </div>
</template>

<script>
  export default {
    name:'Information'
  }
</script>

<style lang='scss' scoped>
.information{
  padding-top: 20px;
}
.banner{
  height: 200px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 5px;
  margin-bottom: 10px;
}
.news{
  height: 700px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 5px;
}
</style>