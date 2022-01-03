<template>
  <div class="stage-item">
   <div class="stage-item__title" :style="bg_color">
     <span>{{ stage.chapter}} </span>
     <span>{{ stage.title}}</span>
   </div>
   <div class="stage-item__content">
     <div class="stage-item__cover">
      <img :src="stage.cover" alt="">
     </div>
     <div class="stage-item__aside">
       <div class="stage-item__inner" v-show="stage.main.length">
         <div class="stage-item__inner-title">主线</div>
         <div class="stage-item__wrap">
           <div class="stage-item__item" v-for="(item,index) in stage.main" :key="index">
             <span>{{item.id}}</span>
             <span>{{item.name}}</span>
           </div>
         </div>
       </div>
       <div class="stage-item__inner" v-show="stage.branch.length">
         <div class="stage-item__inner-title">支线</div>
         <div class="stage-item__wrap">
           <div class="stage-item__item" v-for="(item,index) in stage.branch" :key="index">
             <span>{{item.id}}</span>
             <span>{{item.name}}</span>
           </div>
         </div>
       </div>
       <div class="stage-item__inner" v-show="stage.hard.length">
         <div class="stage-item__inner-title">绝境作战</div>
         <div class="stage-item__wrap">
           <div class="stage-item__item" v-for="(item,index) in stage.hard" :key="index">
             <span>{{item.id}}</span>
             <span>{{item.name}}</span>
           </div>
         </div>
       </div>
       <div class="stage-item__inner" v-show="stage.training.length">
         <div class="stage-item__inner-title">训练</div>
         <div class="stage-item__wrap">
           <div class="stage-item__item" v-for="(item,index) in stage.training" :key="index">
             <span>{{item.id}}</span>
             <span>{{item.name}}</span>
           </div>
         </div>
       </div>
  
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    name:'stageItem',
    props:{
      stage:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      bg_color(){
        return this.color()
      }
    },
    methods: {
      color(){
        let style = this.stage.style
        if(style.length==2){
          return 'background: linear-gradient(0deg, '+style[0]+',' +style[1]+');'
        }
        if(style.length==3){
          return 'background: linear-gradient(0deg, '+style[0]+',' +style[1]+','+style[2]+');'
        }
      }
    },
  }
</script>

<style lang='scss' scoped>
.stage-item{
  background-color: rgba($color: #fff, $alpha: .1);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &__title{
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 5px 0;
    & span:first-child{
      font-size: 17px;
    }
  }
  &__content{
    display: flex;
  }
  &__cover{
    padding: 5px;
  }
  &__aside{
    border-left: 1px solid #999;
    flex: 1;
  }
  &__inner{
    text-align: center;
  }
  &__inner-title{
    font-size: 17px;
    font-weight: bold;
    color: #141414;
    padding: 5px 0;
    border-top: 1px solid #a2a9b1;
    border-bottom: 1px solid #a2a9b1;
    background-color: rgba($color: #D5D7DB, $alpha: .4);
  }
  &__wrap{
    display: grid;
    // grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    grid-template-columns: repeat(auto-fit,157.4px);
    // grid-auto-rows: 50px;
  }
  &__item{
    padding: 10px 0;
    border: 1px solid #a2a9b1;
    box-sizing: border-box;
    & span{
      display: block;
      // font-size: 15px;
    }
    & span:nth-child(2){
      font-size: 14px;
    }
  }
}
</style>