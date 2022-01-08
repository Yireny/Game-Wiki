const POST = require('../models/posts')
const USER = require('../models/users')
const ID = require('../utils/createID')
const DATE = require('../utils/createDate')

const posts = async (req, res) => {
  const data = await POST.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const publish = async(req,res)=>{
  let { title , theme , content , img }=req.body.params
  const user = await USER.find({
    id: req.body.params.id
  })
  POST.create({
    title,
    theme,
    content,
    img,
    id:ID(),
    date:DATE(),
    name:user[0].name,
    avatar:user[0].avatar
  })
}


module.exports = {
  posts,
  publish,
}
