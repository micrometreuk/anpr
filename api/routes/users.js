var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/video', function(req, res, next) {
  res.sendFile('alprVideo.mp4', { root: 'public/uploaded-videos'});
  });

module.exports = router;
