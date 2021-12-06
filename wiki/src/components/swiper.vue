<template>
  <div class="swiper" v-if=slide.length>
    <swiper
    :options='swiperOption'
    class="swiper-container"
    >
      <swiper-slide
      class="swiper-slide"
      v-for="(item,index) in slide"
      :key="index"
      >
        <img :src="item" alt="">
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
      slide:{
        type:Array,
        default(){
          return []
        }
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
          }
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
  .swiper-slide{
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
  background-color: rgba($color: #000000, $alpha: .5);
  border-radius: 100%;
  background-image: none;
  &-prev{
    transform: translateX(100px);
  }
  &-next{
    transform: translateX(-100px);
  }
  &:hover{
    background-color: #00C3FF;
  }
}
.iconfont{
  color: #fff;
}
</style>