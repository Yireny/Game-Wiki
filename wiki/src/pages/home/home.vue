<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
        <swiper></swiper>
      </div>
      <div class="content__information">
        资讯
      </div>
    </div>
    <div class="aside">
      banner
    </div>
  </div>
</template>

<script>
  import Swiper from '../../components/swiper'
  export default {
    name:'Home',
    components: {
      Swiper
    }
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
  &__swiper{
    width: 700px;
    height: 284px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 10px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  &__information{
    width: 100%;
    height: 500px;
    background-color: rgba(255, 255, 255,.7);
    border-radius: 10px;
  }
}
.aside{
  width: 280px;
  // margin: 0 auto;
  background-color: rgba(255, 255, 255,.7);
  border-radius: 10px;
}
</style>