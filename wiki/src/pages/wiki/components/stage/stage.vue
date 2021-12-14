<template>
  <div class="stage">
    <div class="stage__wrap">
      <stage-item
      v-for="(item,index) in stage"
      :key="index"
      :stage='item'
      >
      </stage-item>
    </div>
  </div>
</template>

<script>
import stageItem from './stageItem'
import {get} from '@/utils/request'

  export default {
    name:'stage',
    components: {
      stageItem
    },
    data() {
      return {
        stage:[]
      }
    },
    methods: {
      getStageData(){
        get('/stage',{}).then(res=>{
          this.stage=res.data
        })
      }
    },
    created () {
      this.getStageData()
    }
  }
</script>

<style lang='scss' scoped>
.stage{
  width: 100%;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(450px,1fr));
    grid-gap: 10px;
  }
}
</style>