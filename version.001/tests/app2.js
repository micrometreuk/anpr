const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')


app.use(bodyParser.json());
   app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
   });

app.post('/', function(req, res){
  let plate = req.body.results[0].candidates[0];
  io.sockets.emit(plate);
  console.log(plate);
  res.redirect('back');
});



http.listen(9091, () => {
  console.log('listening on *:9091');
});
