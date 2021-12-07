const USER = require('../models/user')

const user = (req,res)=>{
  USER.find().then(doc=>{
    return res.json({
      // status:200,
      data:doc,
      msg:'成功'
    })
  }).catch(err=>{
    return res.json({
      // status:203,
      data:err,
      msg:'失败'
    })
  })
}

module.exports = user