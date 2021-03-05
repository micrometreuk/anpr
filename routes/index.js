var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let alpr = (req.body.results[0]);
  console.log(alpr)  
});

module.exports = router;

