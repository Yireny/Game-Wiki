const Mock=require('mockjs')

//帖子
Mock.mock('http://api/post',Mock.mock({
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
Mock.mock('http://api/swiper',Mock.mock({
  'data|4':[
    "@image('1650x900', '#fff', 'swiper-img')" 
  ]
}).data)




//用户信息
Mock.mock('/',Mock.mock({
  'user|5-10':{
    'id':'@id|6',
    'name':'@cname',
    'frame':'头像编号',
    'password':123456,
    'gender':'@gender',
    'birthday':'@date("yyyy-MM-dd")',
    'post':['postID'],
    'reply':['replyID'],
    'like':'@number'
  }
}).user)

//头像列表
Mock.mock('/',Mock.mock({
  'frameList|5-10':[
    {
      'id|+1':1,
      'frame':'@image'
    }
  ]
}).frameList)

//主题表
Mock.mock('/',Mock.mock({
  '':[
    
  ]
}).data)

//主题回复表
Mock.mock('/',Mock.mock({
  '':[
    
  ]
}).data)

//百科信息表
Mock.mock('/',Mock.mock({
  '':[
    
  ]
}).data)

//攻略表
Mock.mock('/',Mock.mock({
  '':[
    
  ]
}).data)

//活动资讯表
Mock.mock('/',Mock.mock({
  '':[
    
  ]
}).data)