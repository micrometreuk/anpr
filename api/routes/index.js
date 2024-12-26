var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const interval = setInterval(() => {
    const randomData = Math.random();
    res.write(`data: ${JSON.stringify({ data: data })}\n\n`);
  }, 2000); // Send data every 2 seconds

  req.on('close', () => {
    clearInterval(interval); 
  });
});






module.exports = router;
