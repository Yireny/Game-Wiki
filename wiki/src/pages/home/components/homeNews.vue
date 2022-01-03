<template>
  <div class="home-news">
    <div class="home-news__banner">
      <img :src="news.banner" alt="">
    </div>
    <div class="home-news__information">
      <div class="home-news__title">最新资讯</div>
      <div class="home-news__item">【活动】内容内容内容内容内容内容内容内容</div>
      <div class="home-news__item">【公告】内容内容内容内容内容内容内容内容</div>
      <div class="home-news__item">【公告】内容内容内容内容内容内容内容内容</div>

    </div>
  </div>
</template>

<script>
  export default {
    name:'homeNews',
    props:{
      newsMsg:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        news:this.newsMsg
      }
    },
  }
</script>

<style lang='scss' scoped>
.home-news{
  &__banner{
    height: 200px;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    & img{
      // width: 100%;
      height: 100%;
    }
  }
  &__information{
    min-height: 500px;
    // padding: 10px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 5px;
  }
  &__title{
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    padding: 17px 20px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }
  &__item{
    margin: 10px 0;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>