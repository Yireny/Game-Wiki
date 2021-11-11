<template>
  <div class="main">
    <div class="content">
      <div class="content__swiper">
        轮播图
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
  background-color: rgba(250, 250, 250,.5);
  border-radius: 10px;
  &__swiper{
    width: 700px;
    height: 284px;
    background-color: rgb(250, 200, 200);
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  &__information{
    width: 100%;
    height: 500px;
    background-color: rgb(200, 240, 240);
  }
}
.aside{
  width: 280px;
  margin: 0 auto; 
  background-color: rgba(250, 250, 250,.5);
  border-radius: 10px;
}
</style>