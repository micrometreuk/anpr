process.chdir(__dirname);
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser')
const logger = require('morgan');
let app    = express();
let server = http.createServer(app);
let io     = socketIO(server);

app.use(express.static('assets/'));
app.use(express.static('public/'));


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.get('/api', function (req, res) {
        res.json("That is incorrect.")
});
app.get("/video", (req, res) => {
  res.sendFile("assets/sample.mp4", { root: __dirname });
});


app.post('/', function(req, res){
res.redirect('back');
let plate = req.body.results[0].plate;
    console.log(res);
io.sockets.setMaxListeners(0);
io.on('connection', socket => {
  let counter = 0;
  setInterval(() => {
    socket.emit('plate', ++counter, plate);
  }, 1000);
});
});

server.listen(9091, () => {
  console.log('listening on *:9091');
});
