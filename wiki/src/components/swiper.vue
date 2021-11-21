<template>
  <div class="swiper">
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
        <img src="../assets/images/干员轮换卡池67.jpg" alt="">
      </swiper-slide>
      

    </swiper>
    <div class="swiper-button swiper-button-prev">
      <span class="iconfont">&#xe710;</span>
    </div>
    <div class="swiper-button swiper-button-next">
      <span class="iconfont">&#xe715;</span>
    </div>
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
    props: {
      type:Object,
      default(){
        return {}
      }
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
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.swiper{
  position: relative;
}
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
.swiper-button{
  position: absolute;
  top: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 100%;
  background-image: none;
  &-prev{
    transform: translateX(100px);
  }
  &-next{
    transform: translateX(-100px);
  }
}
.iconfont{
  color: #fff;
}
</style>