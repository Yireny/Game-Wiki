<template>
  <div class="post" v-if="post">
    <div class="post__back" @click="closePost">返回</div>
    <div class="post__title">{{post[0].title}}</div>
    <div class="post__header">
      <div class="post__user">
        <div class="post__avatar">
          <img :src="post[0].avatar" alt="">
        </div>
        <div class="post__name">{{post[0].name}}</div>
      </div>
      <div class="post__main">
        <div class="post__content">{{post[0].content}}</div>
        <div v-show="post.img" class="post__img">
            <img v-for="(item,index) in post[0].img" :src="post[0].img[index]" alt="">
          </div>
      </div>
        <div class="post__date">{{post[0].date}}</div>
    </div>
    <div class="post__reply">
      <textarea
      type="text"
      class="post__area"
      v-model="commentMsg.content"
      placeholder="来发表你的观点吧"
      ></textarea>
      <div class="post__comment" @click="comment">评论</div>
    </div>
    <div class="post__wrap">
      <reply
      v-for="item in postReply"
      :postReply='item'
      ></reply>
    </div>
  </div>
</template>

<script>
import reply from './reply'
import { get,post } from '@/utils/request'

  export default {
    name:'post',
    components:{
      reply
    },
    props:{
      postDetail:{
        type:Array,
        default(){
          return []
        }
      },
      showPost:{
        type:Function,
        require:true,
        default:null
      }
    },
    data() {
      return {
        commentMsg:{
          postId:'',
          content:'',
          img:[],
          userId:'',
          reply:[]
        }
      }
    },
    computed: {
      post(){
        return this.postDetail
      },
      postReply(){
        return this.reply.filter(item =>item.postId == this.post[0].id)
      }
    },
    methods: {
      closePost(){
        this.showPost()
      },
      getReply(){
        get('/reply',{}).then(res=>{
          this.reply = res.data.data
          console.log(this.reply)
        })
      },
      comment(){
        if(this.$store.getters.isLogin){
          this.commentMsg.userId = this.$store.getters.getUser.id
          this.commentMsg.postId = this.post[0].id
          console.log(this.commentMsg.postId)
          post('/comment',{...this.commentMsg})
        }else{
          alert('请先登录')
        }
      }
    },
    mounted () {
      this.getReply()
    }
  }
</script>

<style lang='scss' scoped>
.post{
  background-color: rgba($color: #fff, $alpha: .7);
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  &__back{
    display: inline-block;
    margin: 10px 0;
    padding: 2px 4px;
    font-size: 15px;
    background-color: rgba($color: #fff, $alpha: .1);
    box-shadow: 2px 2px 5px rgba(9, 33, 58, 0.4);
    border-radius: 5px;
    &:hover{
    box-shadow: 2px 2px 10px rgba(9, 33, 58, .8);
    }
  }
  &__header{
    width: 100%;
  }
  &__user{
    display: flex;
    align-items: center;
  }
  &__avatar{
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 100%;
    & img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      border-radius: 100%;
    }
  }
  &__name{
    padding: 0 10px;
    line-height: 24px;
    font-size: 14px;
    color: #666;
  }
  &__date{
    line-height: 24px;
    font-size: 14px;
    color: #ccc;
  }
  &__main{
  width: 100%;
  }
  &__title{
    display: flex;
    width: 100%;
    padding-right: 100px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-overflow: ellipsis;
  }
  &__content{
    width: 100%;
    font-size: 14px;
    color: #999;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 8px 0;
  }
  &__img{
    display: flex;
    overflow: hidden;
    & img{
      width: 120px;
      height: 120px;
      justify-content: center;
      border-radius: 5px;
      margin-right: 5px;
    }
  }
  &__reply{
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 50px;
    margin: 20px 0;
  }
  &__area{
    flex: 1;
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
  &__comment{
    width: 70px;
    height: 32px;
    font-size: 13px;
    background-color: #00a1d6;
    line-height: 32px;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    opacity: .5;
  }
}
</style>