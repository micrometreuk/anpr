var express = require('express');
var router = express.Router();
const redis = require('redis');

/* GET users listing. */




router.get('/', function(req, res, next) {
  (async () => {

    const client = redis.createClient();
  
    const subscriber = client.duplicate();
  
    await subscriber.connect();
  
    await subscriber.subscribe('article', (message) => {
      console.log(message); // 'message'
    });
  
  })();
  res.send('respond with a resource');
});







module.exports = router;