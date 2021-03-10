var express = require('express');
var router = express.Router();

/* GET users listing. */



router.get('/', function(req, res, next) {
res.sendFile('sample.mp4', { root: 'public'});


});

module.exports = router;
