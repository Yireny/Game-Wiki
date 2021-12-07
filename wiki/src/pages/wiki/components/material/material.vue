<template>
   <div class="material">
    <div class="material__wrap">
      <material-item
      v-for="(item,index) in material"
      :key="index"
      :material='item'
      >
      </material-item>
    </div>
  </div>
</template>

<script>
import materialItem from './materialItem'
import {get} from '@/utils/request'

  export default {
    name:'material',
    components: {
      materialItem
    },
    data() {
      return {
        material:[]
      }
    },
    methods: {
      getMaterialData(){
        get('http://localhost:3000/material',{}).then(res=>{
          this.material=res.data
        })
      }
    },
    created () {
      this.getMaterialData()
    }
  }
</script>

<style lang='scss' scoped>
.material{
  width: 100%;
  height: 700px;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    grid-gap: 10px;
  }
}
</style>