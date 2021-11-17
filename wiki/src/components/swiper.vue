<template>
  <div>
    <swiper
    :options='swiperOption'
    class="swiper-container"
    >
      <swiper-slide
      class="swiper-slide"
      >
        <img src="../assets/images/联合行动05.jpg" alt="">
      </swiper-slide>
      <swiper-slide
      class="swiper-slide"
      >
        <img src="../assets/images/干员轮换卡池67.jpg" alt="">
      </swiper-slide>
      <swiper-slide
      class="swiper-slide"
      >
        <img src="../assets/images/活动预告_感谢庆典2021_02.jpg" alt="">
      </swiper-slide>
      

    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

  export default {
    name:'Swiper',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption:{
          effect: 'coverflow',
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          autoplay:{
            delay:2000,
            disableOnInteraction: false,
          },
          speed: 1000,
          coverflowEffect: {
            rotate: 0,
            stretch: 210,
            depth: 200,
            modifier: 1,
            slideShadows: false
          }
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.swiper-container{
  width: 700px;
  height: 250px;
  cursor: default;
  .swiper-slide{
    display: flex;
    align-items: center;
    width: 412px;
    height: 225px;
    border-radius: 5px;
    & img{
      width: 412px;
      height: auto;
      border-radius: 5px;
    }
  }
}
</style>