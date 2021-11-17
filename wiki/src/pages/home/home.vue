<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
        <swiper></swiper>
      </div>
      <div class="content__information">
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
      </div>
    </div>
    <div class="aside">
      banner
    </div>
  </div>
</template>

<script>
  import Swiper from '../../components/swiper'
  import PostItem from './components/postItem'

  export default {
    name:'Home',
    components: {
      Swiper,
      PostItem
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
  &__swiper{
    width: 700px;
    height: 250px;
  }
  &__information{
    width: 100%;
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