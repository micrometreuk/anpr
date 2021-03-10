process.chdir(__dirname);
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser')
const publicPath    = path.join(__dirname, '/../public');

let app             = express();
let server          = http.createServer(app);
let io              = socketIO(server);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
})); 
app.get('/test', function (req, res) {
    res.render('index.ejs');
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
 });

app.get("/video", (req, res) => {
  res.sendFile("assets/sample.mp4", { root: __dirname });
});


app.post('/', function(req, res){
res.redirect('back');
let plate = req.body.results[0].plate;
//plate = JSON.stringify(plate);
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
