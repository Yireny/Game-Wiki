<template>
  <div class="news">
    <div class="banner"></div>
    <div class="information"></div>
  </div>
</template>

<script>
  export default {
    name:'news'
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
.information{
  height: 700px;
  background-color: rgba(255, 255, 255, .7);
  border-radius: 5px;
}
</style>