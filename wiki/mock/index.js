const Mock=require('mockjs')

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

Mock.mock('http://api/swiper',Mock.mock({
  'data|4':[
    "@image('1650x900', '#fff', 'swiper-img')" 
  ]
}).data)