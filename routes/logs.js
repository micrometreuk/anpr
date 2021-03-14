var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function(req, res, next) {
res.sendFile('alprVideo-.mp4', { root: 'public/uploads'});
});

module.exports = router;
