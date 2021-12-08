var express = require('express');
var router = express.Router();
var test = require('../controller/test')

/* GET users listing. */
router.get('/', test);


module.exports = router;