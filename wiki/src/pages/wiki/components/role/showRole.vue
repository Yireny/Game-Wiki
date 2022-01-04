<template>
  <div class="show-role">
    <div class="iconfont show-role__back" @click="closeDetail">&#xe60b;</div>
    <div class="show-role__wrap">
      <div class="show-role__level">
        <div @click="changePainting(0)" class="show-role__level-item">
          <img src="../../../../assets/images/level_0.png" alt="">
          <span>初始</span>
        </div>
        <div @click="changePainting(1)" class="show-role__level-item">
          <img src="../../../../assets/images/level_1.png" alt="">
          <span>精英一</span>
        </div>
        <div @click="changePainting(2)" class="show-role__level-item">
          <img src="../../../../assets/images/level_2.png" alt="">
          <span>精英二</span>
        </div>
      </div>
      <div v-show="indexID == 0 || indexID == 1" class="show-role__painting">
        <img :src="role.painting[0]" alt="">
      </div>
      <div v-show="indexID == 2" class="show-role__painting show-role__painting-two">
        <img :src="role.painting[1]" alt="">
      </div>
      <div class="show-role__rarity">
        <img :src="rarity" alt="">
        <span>{{role.name}}</span>
      </div>
      <div class="show-role__occupation">
        <img :src="occupation" alt="">
        <span>{{role.occupation}}</span>
      </div>
      <div class="show-role__features">
        <span class="show-role__features-title">特性</span>
        <span class="show-role__features-content">{{role.features}}</span>
      </div>
      <div class="show-role__description">
        <span class="show-role__description-title">描述</span>
        <span class="show-role__description-type">默认服装</span>
        <span class="show-role__description-content">
          干员平时最常穿着的服装。<br>虽然不一定比制服更实用，但是一定是干员最舒适的搭配之一。
        </span>
      </div>
    </div>
    <div class="show-role__attribute">
      <div class="show-role__attribute-title">属性</div>
      <table>
        <tbody>
          <tr>
            <th width="16.6%">再部署时间</th>
            <td width="33.4%">{{role.attribute.res}}</td>
            <th width="16.6%">部署费用</th>
            <td width="33.4%">{{role.attribute.cost}}</td>
          </tr>
          <tr>
            <th>阻挡数</th>
            <td>{{role.attribute.block}}</td>
            <th>攻击间隔</th>
            <td>{{role.attribute.atktime}}</td>
          </tr>
          <tr>
            <th>攻击</th>
            <td>{{role.attribute.atk}}</td>
            <th>生命上限</th>
            <td>{{role.attribute.hp}}</td>
          </tr>
          <tr>
            <th>防御</th>
            <td>{{role.attribute.def}}</td>
            <th>法术抗性</th>
            <td>{{role.attribute.rgs}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="show-role__talent">
      <div class="show-role__talent-title">天赋</div>
      <table>
        <tbody>
          <tr>
            <th width="16.6%">天赋</th>
            <th width="16.6%">名称</th>
            <th width="66.8%">描述</th>
          </tr>
          <tr v-for="(item,index) in role.talent">
            <th>第{{numToStr(index)}}天赋</th>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="show-role__skill">
      <div class="show-role__skill-title">技能</div>
      <table>
        <tbody>
          <tr>
            <th width="16.6%">技能</th>
            <th width="16.6%">名称</th>
            <th width="66.8%">描述</th>
          </tr>
          <tr v-for="(item,index) in role.skill">
            <th>{{numToStr(index)}}技能</th>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="show-role__logistics">
      <div class="show-role__logistics-title">后勤天赋</div>
      <table>
        <tbody>
          <tr>
            <th width="16.6%">技能</th>
            <th width="16.6%">名称</th>
            <th width="66.8%">描述</th>
          </tr>
          <tr v-show="role.logistics[0]">
            <th>一技能</th>
            <td>{{role.logistics[0].name}}</td>
            <td>{{role.logistics[0].description}}</td>
          </tr>
          <tr v-show="role.logistics[1]">
            <th>二技能</th>
            <td>{{role.logistics[1].name}}</td>
            <td>{{role.logistics[1].description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name:'showRole',
    props:{
      role:{
        type:Object,
        default(){
          return {}
        }
      },
      hideDetail:{
        type:Function,
        require:true,
        default:null
      }
    },
    data() {
      return {
        roleDetail:this.role,
        indexID:0,
        xf:'https://prts.wiki/images/7/78/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E5%85%88%E9%94%8B.png',
        jw:'https://prts.wiki/images/7/7d/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E8%BF%91%E5%8D%AB.png',
        jj:'https://prts.wiki/images/9/96/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E7%8B%99%E5%87%BB.png',
        zz:'https://prts.wiki/images/3/3c/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E9%87%8D%E8%A3%85.png',
        yl:'https://prts.wiki/images/b/be/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E5%8C%BB%E7%96%97.png',
        fz:'https://prts.wiki/images/c/c7/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E8%BE%85%E5%8A%A9.png',
        ss:'https://prts.wiki/images/2/23/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E6%9C%AF%E5%B8%88.png',
        tz:'https://prts.wiki/images/f/f1/%E5%9B%BE%E6%A0%87_%E8%81%8C%E4%B8%9A_%E7%89%B9%E7%A7%8D.png',
        one:'https://prts.wiki/images/0/06/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_0.png',
        two:'https://prts.wiki/images/8/8a/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_1.png',
        three:'https://prts.wiki/images/6/66/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_2.png',
        four:'https://prts.wiki/images/4/49/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_3.png',
        five:'https://prts.wiki/images/b/bf/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_4.png',
        six:'https://prts.wiki/images/c/cf/%E7%A8%80%E6%9C%89%E5%BA%A6_%E7%99%BD_5.png'
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
      closeDetail(){
        this.hideDetail()
      },
      changePainting(index){
        this.indexID = index
      },
      numToStr(index){
        switch(index){
          case 0:
            return '一'
          case 1:
            return '二'
          case 2:
            return '三'
        }
      },
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
.show-role{
  width: 100%;
  &__back{
    width: 30px;
    height: 30px;
    margin: 10px;
    text-align: center;
    line-height: 30px;
    background-color: rgba($color: #fff, $alpha: .1);
    box-shadow: 5px 5px 5px rgba(9, 33, 58, 0.4);
    border: 1px solid #BFBFBF;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    &:hover{
    box-shadow: 5px 5px 10px rgba(9, 33, 58, .8);
    }
  }
  &__wrap{
    position: relative;
    width: 100%;
    height: 600px;
    background: url('~@/assets/images/bg_role.png') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  &__level{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 5;
    &-item{
      display: flex;
      align-items: center;
      width: 120px;
      height: 40px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
      margin-left: 10px;
      cursor: pointer;
      user-select: none;
      & img{
        width: 50px;
        height: 32px;
        margin-left: 2px;
      }
      & span{
        font-size: 15px;
        display: inline-block;
        padding: 0 10px;
      }
    }
  }
  &__painting{
    // position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    & img{
      // width: 100%;
      // height: auto;
      height: 600px;
      width: auto;
    }
    &-two{
      & img{
        height: 800px;
      }
    }
  }
  &__rarity{
    position: absolute;
    bottom: 50px;
    left: 10px;
    z-index: 5;
    & span{
      display: block;
      font-size: 72px;
      color: white;
      text-shadow: 2.5px 2.5px 0px rgb(0 0 0 / 25%), 2.5px -2.5px 0px rgb(0 0 0 / 25%), -2.5px 2.5px 0px rgb(0 0 0 / 25%), -2.5px -2.5px 0px rgb(0 0 0 / 25%);
      font-weight: bolder;
      margin-left: 8px;
    }
  }
  &__occupation{
    position: absolute;
    bottom: 8px;
    left: 18px;
    z-index: 5;
    & img{
      vertical-align: -2px;
      border-radius: 5px;
    }
    & span{
      display: inline-block;
      font-size: 30px;
      color: white;
      text-shadow: 2.5px 2.5px 0px rgb(0 0 0 / 25%), 2.5px -2.5px 0px rgb(0 0 0 / 25%), -2.5px 2.5px 0px rgb(0 0 0 / 25%), -2.5px -2.5px 0px rgb(0 0 0 / 25%);
      font-weight: bolder;
      margin-left: 8px;
    }
  }
  &__features{
    position: absolute;
    bottom: 210px;
    right: 15px;
    width: 300px;
    height: 110px;
    background-color: rgba(49,49,49,.85);
    box-shadow: 0 0 20px #000;
    z-index: 5;
    & span{
      display: block;
    }
    &-title{
      padding-top: 7px;
      padding-left: 10px;
      font-size: 16px;
      color: #c9c9c9;
    }
    &-content{
      width: 280px;
      height: 78px;
      text-align: center;
      font-size: 14px;
      color: white;
      padding-left: 10px;
      padding-right: 10px;
      line-height: 1.6;
      white-space: pre-wrap;
    }
  }
  &__description{
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 300px;
    height: 190px;
    background-color: rgba(49,49,49,.85);
    box-shadow: 0 0 10px #000;
    z-index: 5;
    &-title{
      display: block;
      padding-top: 5px;
      padding-left: 10px;
      font-size: 16px;
      color: #c9c9c9;
    }
    &-type{
      display: inline-block;
      font-size: 14px;
      color: black;
      padding-left: 5px;
      padding-right: 5px;
      margin: 5px 10px;
      background-color: #ffffff;
    }
    &-content{
      display: block;
      padding-top: 2px;
      padding-left: 10px;
      padding-right: 10px;
      color: white;
      font-size: 14px;
      line-height: 1.6;
    }
  }
  &__attribute{
    width: 100%;
      // border: 1px solid #999;
      // border-radius: 5px;
      // overflow: hidden;
      margin: 20px 0;
      &-title{
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #999;
        margin-bottom: 5px;
        padding: 10px 0;
      }
  }
  &__talent{
    margin: 20px 0;
      &-title{
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #999;
        margin-bottom: 5px;
        padding: 10px 0;
      }
  }
  &__skill{
    margin: 20px 0;
      &-title{
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #999;
        margin-bottom: 5px;
        padding: 10px 0;
      }
  }
  &__logistics{
    margin: 20px 0;
      &-title{
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #999;
        margin-bottom: 5px;
        padding: 10px 0;
      }
  }
  & table{
      width: 100%;
      text-align: center;
      white-space: normal;
      border-collapse: collapse;
      line-height: 1.6;
  }
  & th,
  & td{
    border: 1px solid #999;
  }
  & th{
    background-color: rgba(213,215,219,.4)
  }
}
</style>