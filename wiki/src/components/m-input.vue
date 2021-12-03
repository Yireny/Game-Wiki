<template>
  <div class="m-input">
    <textarea
    class="m-input__content"
    :style="{height:textHeight+'px'}"
    placeholder="请输入你想发布的内容"
    v-model="content"
    >
      {{content}}
    </textarea>
  </div>
</template>

<script>
  export default {
    name:'m-input',
    data () {
      return {
        content:'',
        num:0
      }
    },
    methods: {
      countLength(str){
        let len = 0;
        for (var i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
          }else {
            len += 2;
          }
        }
        return len;
      },
      countHeight(){
        let height=Math.ceil(this.countLength(this.content)/86)*24
        return  height<=24?24:height
      }
    },
    computed: {
      textHeight(){
        return this.countHeight()
      }
    }
  }
</script>

<style lang='scss' scoped>
.m-input{
  &__content{
    position: relative;
    width: 100%;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 22px;
    box-sizing: border-box;
    color: #222;
    outline-style: none;
    border: 0;
    background-color: transparent;
    resize: none;
    white-space: pre-line;
    word-break: break-all;
    &::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>