<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
      </div>
      <div class="content__information"></div>
    </div>
    <div class="aside"></div>
  </div>
</template>

<script>
  export default {
    name:'Home'
  }
</script>

<style lang='scss' scoped>
.main{
  border-radius: 5px;
  display: flex;
}
.content{
  width: 700px;
  height: 1000px;
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
  opacity: .5;
}
.aside{
  width: 280px;
  margin: 0 auto; 
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
  opacity: .5;
}
</style>