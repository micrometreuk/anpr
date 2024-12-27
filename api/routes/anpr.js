var express = require('express');
var router = express.Router();
const alpr = require('../controllers/anpr');
var amqp = require('amqplib/callback_api');



router.get('/', function(req, res){
  alpr.index(req,res);
});

router.post('/', function(req, res) {
  alpr.create(req,res);
});




module.exports = router;
