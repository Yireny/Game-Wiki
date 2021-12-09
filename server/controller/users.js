const USER = require('../models/users')
const ID = require('../utils/createID')

const users = async (req, res) => {
  const data = await USER.find()
  return res.json({
    status: 2000,
    data: data,
    msg: 'ok'
  })
}

const register = (req,res)=>{
  let { name , password } = req.body.params
  USER.create({
    name,
    password,
    id: ID()
  })
}


module.exports = {
  users,
  register
}