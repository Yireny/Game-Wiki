<template>
  <div class="tabbar">
    1111
    <span>qweqwspan</span>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar'
  }
</script>

<style lang="scss">
  .tabbar {
    background-color: rgb(245, 245, 245);
    overflow-y: hidden;
    box-sizing: border-box;
    padding: 20px;
    &::-webkit-scrollbar {
      width: 6px;
      &-thumb {
        border-radius: 10px;
        background-color: rgb(181, 181, 181);
      }
    }
    &:hover {
      overflow-y: scroll;
    }
  }
</style>