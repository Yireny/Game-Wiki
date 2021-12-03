<template>
  <div class="topic">
    <div class="topic__title">最近话题</div>
  </div>
</template>

<script>
  export default {
    name:'topic'
  }
</script>

<style lang='scss' scoped>
.topic{
  width: 100%;
  height: 1000px;
  background-color: rgba(250, 250, 250, .7);
  border-radius: 10px;
  &__title{
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    padding: 17px 20px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
  }
}
</style>