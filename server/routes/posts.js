var express = require('express');
var router = express.Router();
var post = require('../controller/posts')


router.get('/posts',post.posts)

router.post('/publish',post.publish)


module.exports = router;