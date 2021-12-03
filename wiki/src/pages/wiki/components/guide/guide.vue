<template>
  <div class="guide">
    <guide-item
    v-for="item in guide"
    :key="item.index"
    :guideItem='item'
    :class="{'guide-item--active':wikiIndex===item.index}"
    @click.native="itemClick(item.index)"
    >
    </guide-item>
  </div>
</template>

<script>
import guideItem from './guideItem'

  export default {
    name:'guide',
    components: {
      guideItem
    },
    props:{
      wikiIndex:{
        type:Number,
        default(){
          return 1
        }
      }
    },
    data () {
      return {
        guide:[
          {
            index:1,
            text:'干员',
          },
          {
            index:2,
            text:'敌人',
          },
          {
            index:3,
            text:'道具',
          },
          {
            index:4,
            text:'时装',
          },
          {
            index:5,
            text:'关卡',
          }
        ]
      }
    },
    methods: {
      itemClick(index){
        this.$emit('test',index)
      }
    }
  }
</script>

<style lang='scss' scoped>
.guide{
  display: flex;
  // justify-content: space-between;
  justify-content: space-evenly;
  // justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
</style>