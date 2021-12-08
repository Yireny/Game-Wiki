const USER = require('../models/user')

const user = async (req, res) => {
  const data = await USER.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

// const register = (req,res)=>{
  // let data={
  //   name=req.body.name,
  //   password=req.body.password
  // }
// }


module.exports = user