var express = require('express');
var router = express.Router();
var user = require('../controller/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`ssss`);
});


module.exports = router;
