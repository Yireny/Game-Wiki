<template>
  <div class="home">
    <div class="home__content">
      <div class="home__swiper">
      </div>
      <div class="home__information"></div>
    </div>
    <div class="home__aside"></div>
  </div>
</template>

<script>
  export default {
    name:'Home'
  }
</script>

<style lang='scss' scoped>
.home{
    border-radius: 5px;
    display: flex;
    &__content{
      width: 700px;
      height: 1000px;
      background-color: rgb(250, 250, 250);
      border-radius: 10px;
      opacity: .5;
    }
    &__aside{
      width: 280px;
      margin: 0 auto; 
      background-color: rgb(250, 250, 250);
      border-radius: 10px;
      opacity: .5;
    }
}
</style>