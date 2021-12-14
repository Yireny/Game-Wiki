<template>
  <div class="enemy">
    <div class="enemy__wrap">
      <enemy-item
      v-for="(item,index) in enemy"
      :key="index"
      :enemy='item'
      >
      </enemy-item>
    </div>
  </div>
</template>

<script>
import enemyItem from './enemyItem'
import {get} from '@/utils/request'

  export default {
    name:'enemy',
    components: {
      enemyItem
    },
    data() {
      return {
        enemy:[]
      }
    },
    methods: {
      getEnemyData(){
        get('/enemy',{}).then(res=>{
          this.enemy=res.data
        })
      }
    },
    created () {
      this.getEnemyData()
    }
  }
</script>

<style lang='scss' scoped>
.enemy{
  width: 100%;
  &__wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(450px,1fr));
    grid-gap: 10px;
  }
}
</style>