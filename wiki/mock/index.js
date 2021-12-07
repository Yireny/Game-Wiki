const Mock=require('mockjs')

//帖子
Mock.mock('http://localhost:3000/post',Mock.mock({
  'data|3-5':[{
      'id':'@id',
      'time':'@date("yyyy-MM-dd")',
      'name':'@cname()',
      'frame':"@image('24x24', '#fff', 'ss')",
      'title':'@ctitle',
      'content':'@cparagraph',
      'img1':"@image('120x120', '#fff', '1')",
      'img2':"@image('120x120', '#fff', '2')",
      'img3':"@image('120x120', '#fff', '3')",
      'views':'@integer(700,1000)',
      'comments':'@integer(0,700)',
      'like':'@integer(0,700)'
  }]
}).data)

//轮播图
Mock.mock('http://localhost:3000/swiper',Mock.mock({
  'data|4':[
    "@image('1650x900', '#fff', 'swiper-img')" 
  ]
}).data)



//用户信息
Mock.mock('http://localhost:3000/profile',Mock.mock({
  'data':{
    'id':'123456',
    'name':'测试用户1',
    'avatar':"@image('24x24', '#fff', 'ss')",
    'password':'123456',
    'gender':'男',
    'birthday':2000-01-01,
    'signature':'个性签名',
    'post':['postID','2'],
    'reply':['replyID'],
    'like':333
  }
}).data)

//角色
Mock.mock('http://localhost:3000/role',Mock.mock({
  'data|20-30':[
    {
      'id|+1':1,
      'name':'@name()',
      'avatar':"@image('180x180', '#fff', '')"
    }
  ]
}).data)

//敌人
Mock.mock('http://localhost:3000/enemy',Mock.mock({
  'data|25-30':[
    {
      'id|+1':1,
      'name':'@name()',
      'avatar':"@image('180x180', '#fff', '')"
    }
  ]
}).data)

//素材
Mock.mock('http://localhost:3000/material',Mock.mock({
  'data|20-30':[
    {
      'id|+1':1,
      'name':'@name()',
      'avatar':"@image('180x180', '#fff', '')"
    }
  ]
}).data)

//时装
Mock.mock('http://localhost:3000/fashion',Mock.mock({
  'data|20-30':[
    {
      'id|+1':1,
      'name':'@name()',
      'avatar':"@image('180x180', '#fff', '')"
    }
  ]
}).data)

//关卡
Mock.mock('http://localhost:3000/stage',Mock.mock({
  'data|20-30':[
    {
      'id|+1':1,
      'name':'@name()',
      'avatar':"@image('180x180', '#fff', '')"
    }
  ]
}).data)