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
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          // autoplay: 1000,
          // autoplayDisableOnInteraction: false,
          autoplay:{
            delay:1000,
            DisableOnInteraction: false,
          },
          speed: 1000,
          // coverflow: {
          //   rotate: 0,
          //   stretch: 200,
          //   depth: 200,
          //   modifier: 1,
          //   slideShadows: true
          // }
        }
        //分割
        // swiperOption: {
        //   effect: 'coverflow',
        //   centeredSlides: true,
        //   loop: true,
        //   autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false //用户操作之后是否停止自动轮播默认true
        //   },
        //   observer: true,
        //   observerParents: true,
        //   pagination: {
        //     el: ".swiper-pagination",
        //     type: "custom",
        //     renderCustom: function(swiper, current, total) {
        //       return current + "/" + total;
        //     }
        //   }
        // },
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
    width: 412px;
    height: 225px;
    & img{
      width: 412px;
      height: auto;
      border-radius: 5px;
    }
  }
}
</style>