const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id:{type:String},
  name:{type:String},
  avatar:{type:String,default:''},
  password:{type:String},
  sign:{type:String,default:''},
  post:{type:Array,default:[]},
  reply:{type:Array,default:[]},
  like:{type:Number,default:0}
})

module.exports = mongoose.model('user',userSchema)