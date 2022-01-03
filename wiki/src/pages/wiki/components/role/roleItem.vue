<template>
  <div class="role-item">
    <div class="role-item__wrap">
      <img class="role-item__img" :src="role.avatar[0]" alt="">
      <div class="role-item__occupation">
        <img :src="occupation" alt="">
      </div>
      <div class="role-item__rarity">
        <img :src="rarity" alt="">
      </div>
    </div>
    <div class="role-item__name">{{role.name}}</div>
    
  </div>
</template>

<script>
  export default {
    name:'roleItem',
    props:{
      role:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data () {
      return {
        xf:'https://prts.wiki/images/7/78/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E5%85%88%E9%94%8B.png',
        jw:'https://prts.wiki/images/7/7d/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E8%BF%91%E5%8D%AB.png',
        jj:'https://prts.wiki/images/9/96/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E7%8B%99%E5%87%BB.png',
        zz:'https://prts.wiki/images/3/3c/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E9%87%8D%E8%A3%85.png',
        yl:'https://prts.wiki/images/b/be/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E5%8C%BB%E7%96%97.png',
        fz:'https://prts.wiki/images/c/c7/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E8%BE%85%E5%8A%A9.png',
        ss:'https://prts.wiki/images/2/23/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E6%9C%AF%E5%B8%88.png',
        tz:'https://prts.wiki/images/f/f1/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E7%89%B9%E7%A7%8D.png',
        one:'https://prts.wiki/images/6/62/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_0.png',
        two:'https://prts.wiki/images/0/02/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_1.png',
        three:'https://prts.wiki/images/4/4b/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_2.png',
        four:'https://prts.wiki/images/4/4c/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_3.png',
        five:'https://prts.wiki/images/8/81/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_4.png',
        six:'https://prts.wiki/images/4/46/%E7%A8%80%E6%9C%89%E5%BA%A6_%E9%BB%84_5.png'
      }
    },
    computed: {
      occupation(){
        return this.occ(this.role.occupation)
      },
      rarity(){
        return this.rar(this.role.rarity)
      }
    },
    methods: {
      occ(occ){
        switch(occ){
          case '先锋':
            return this.xf
          case '近卫':
            return this.jw
          case '狙击':
            return this.jj
          case '重装':
            return this.zz
          case '医疗':
            return this.yl
          case '辅助':
            return this.fz
          case '术师':
            return this.ss
          case '特种':
            return this.tz
        }
      },
      rar(rar){
        switch(rar){
          case '1':
            return this.one
          case '2':
            return this.two
          case '3':
            return this.three
          case '4':
            return this.four
          case '5':
            return this.five
          case '6':
            return this.six
          
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.role-item{
  // width: 120px;
  background-color: rgba($color: #fff, $alpha: .1);
  box-shadow: 5px 5px 5px rgba(9, 33, 58, 0.4);
  border: 1px solid #BFBFBF;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover{
    box-shadow: 5px 5px 10px rgba(9, 33, 58, .8);
  }
  &__wrap{
    position: relative;
    margin: 2px;
    border: 1px solid rgba($color: #fff, $alpha: .5);
    border-radius: 5px;
  }
  &__img{
    width: 100%;
    height: 100%;
    // background-color: #fff;
  }
  &__occupation{
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
  }
  &__rarity{
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &__name{
    width: 100%;
    text-align: center;
  }
}
</style>