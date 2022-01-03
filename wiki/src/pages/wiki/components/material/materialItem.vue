<template>
  <div class="material-item">
    <div class="material-item__inner">
      <img class="material-item__img" @click="itemClick" :src="material.img" alt="">
    </div>
    <show-material
    class="material-item__detail"
    v-show="isShow"
    :material=item
    :itemClick='closeItem'
    ref="detail"
    ></show-material>
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
      },
      closeItem(){
        this.isShow = false
      },
      position(){
        let [top,height,left,width] = [
          Number(this.$el.offsetTop),
          Number(this.$el.parentNode.offsetHeight),
          Number(this.$el.offsetLeft),
          Number(this.$el.parentNode.offsetWidth)
        ]
        let x = top/height
        let y = left/width
        if(x >= 0.5){
          this.$refs.detail.$el.style.bottom = '120px'
        }else{
          this.$refs.detail.$el.style.top = '120px'
        }
        if(y>=0.5){
          let right = (left + this.$el.offsetWidth)/width
          this.$refs.detail.$el.style.right = (right-1)*500+'%'
        }else{
          this.$refs.detail.$el.style.left = -y*500+'%'
        }
      }
    },
    mounted() {
      document.addEventListener('click',e => { 
        if(this.isShow&&!this.$el.contains(e.target)){
          this.isShow = false
        }else{
          // this.isShow = true
        }
      })
      this.position()
    },
  }
</script>

<style lang='scss' scoped>
.material-item{
  position: relative;
  border-radius: 50%;
  &:hover{
    background-color: rgba(9, 33, 58, 0.1);
  }
  &__img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
  &__detail{
    position: absolute;
    // top: 100%;
    // left: 100%;
    z-index: 2;
  }
}
</style>