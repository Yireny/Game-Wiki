const DB = require('../utils/connectDB')
const Schema = DB.Schema

const userSchema = new Schema({
  name:{
    type:String
  }
})

module.exports = userSchema