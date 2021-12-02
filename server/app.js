const express  = require('express')

const app = express()

require('./model/connect')

app.listen(80,()=>{
  console.log('11')
})