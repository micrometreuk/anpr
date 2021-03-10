var express = require('express');
var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ALPRD api');
});


router.post('/', function(req, res, next) {
  res.send('ALPRD api');
  console.log(req)  
});

module.exports = router;



