<template>
  <div class="material">
    <div class="material__inner">
      <img class="material__img" @click="itemClick" :src="material.img" alt="">
    </div>
    <show-material class="material__de" v-show="isShow" :material=item></show-material>
  </div>
</template>

<script>
import showMaterial from './showMaterial'
  export default {
    name:'materialItem',
    components:{
      showMaterial
    },
    props:{
      material:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        item:this.material,
        isShow:false
      }
    },
    methods: {
      itemClick(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang='scss' scoped>
.material{
  &__img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
  &__detail{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>