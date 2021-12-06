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
            text:'干员档案',
          },
          {
            index:2,
            text:'敌人档案',
          },
          {
            index:3,
            text:'道具资料',
          },
          {
            index:4,
            text:'时装回廊',
          },
          {
            index:5,
            text:'关卡一览',
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}
</style>