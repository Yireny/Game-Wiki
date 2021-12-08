var express = require('express');
var router = express.Router();
var user = require('../controller/user')

//获取用户信息
router.get('/user', user);
//注册
router.post('/register',)
//登录
// router.post('/login',user.login)


module.exports = router;
