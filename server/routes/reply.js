var express = require('express');
var router = express.Router();
var reply = require('../controller/reply')

router.get('/reply',reply.reply)

router.post('/comment',reply.comment)

module.exports = router