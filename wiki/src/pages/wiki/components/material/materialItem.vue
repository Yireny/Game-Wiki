<template>
  <div class="material">
    <div class="material__inner">
      <img class="material__img" @click="itemClick" :src="material.img" alt="">
    </div>
    <show-material class="material__detail" v-show="isShow" :material=item></show-material>
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
        // this.isShow = !this.isShow
      },
    },
    mounted() {
      document.addEventListener('click',e => { 
        if(!this.$el.contains(e.target)){
          this.isShow = false
        }else{
          this.isShow = true
        }
      })
      console.log(this.$el.offsetTop)//元素距离父元素的高度
      console.log(this.$el.parentNode.offsetHeight)//父元素的高度
    },
  }
</script>

<style lang='scss' scoped>
.material{
  position: relative;
  &__img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
  &__detail{
    position: absolute;
    top: 100%;
    left: 100%;
    z-index: 2;
  }
}
</style>