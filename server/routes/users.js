var express = require('express');
var router = express.Router();
var user = require('../controller/users')


//获取用户信息
router.get('/users', user.users);
//注册
router.post('/register',user.register)
//登录
router.post('/login',user.login)


module.exports = router;
