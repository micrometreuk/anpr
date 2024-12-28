var express = require('express');
var router = express.Router();
var SSE = require('express-sse');

 
const sse = new SSE();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events1', (req, res) => {
  //getting res.flush is not a function in express-sse https://github.com/dpskvn/express-sse/issues/28 
  res.flush = function () { /* Do nothing */ }
  sse.init(req, res); 
  const interval =  setInterval(() => {
    const randomData = Math.random();
    sse.send({ message: 'Hello from SSE!' }); 
    //sse.send({ message: randomData }); 
  }, 2000); 
  req.on('close', () => {
    //sse.close(); 
    clearInterval(interval); 
  });
});


router.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const interval = setInterval(() => {
    const randomData = Math.random();
    res.write(`data: ${JSON.stringify({ data: randomData })}\n\n`);
  }, 1000); // Send data every 2 seconds

  req.on('close', () => {
    clearInterval(interval); 
  });
});






module.exports = router;
