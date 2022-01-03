<template>
  <div class="fashion-item">
    <div class="fashion-item__sprite" @click="itemClick">
      <img :src="fashion.sprite" alt="">
    </div>
    <div class="fashion-item__text" @click="itemClick">
      <span>{{fashion.role}}</span>
      <span>{{fashion.name}}</span>
    </div>
    <show-fashion
    class="fashion-item__detail"
    v-show="isShow"
    :fashion=item
    :itemClick='closeItem'
    ref="detail"
    ></show-fashion>
  </div>
</template>

<script>
import showFashion from './showFashion'

  export default {
    name:'fashionItem',
    components:{
      showFashion
    },
    props:{
      fashion:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        item:this.fashion,
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
          this.$refs.detail.$el.style.bottom = '300px'
        }else{
          this.$refs.detail.$el.style.top = '300px'
        }
        if(y>=0.8){
          this.$refs.detail.$el.style.right = '0'
        }else{
          this.$refs.detail.$el.style.left = '0'
        }
      }
    },
    mounted() {
      document.addEventListener('click',e => { 
        if(this.isShow&&!this.$el.contains(e.target)){
          this.isShow = false
        }
      })
      this.position()
    },
  }
</script>

<style lang='scss' scoped>
.fashion-item{
  position: relative;
  background-color: rgba($color: #fff, $alpha: .1);
  box-shadow: 5px 5px 5px rgba(9, 33, 58, 0.4);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  color: #5b5b5b;
  cursor: pointer;
  user-select: none;
  background-color: rgba($color: #fff, $alpha: .7);
  &:hover{
    box-shadow: 5px 5px 10px rgba(9, 33, 58, 0.8);
    background-color: rgba(0, 0, 0, .5);
    color: #fff;  
  }
  &__sprite{
    & img{
      width: 100%;
      // height: auto;
    }
  }
  &__text{
    padding: 5px;
    & span{
      display: block;
    }
    &:nth-child(1){
      font-size: 18px;
      font-weight: 500;
    }
    &:nth-child(2){
      font-size: 14px;
    }
  }
  &__detail{
    position: absolute;
    z-index: 2;
  }
}
</style>