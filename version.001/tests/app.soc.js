const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
 });




app.post('/', function(req, res){
res.redirect('back');
let plate = req.body.results[0].plate;
io.on('connection', socket => {
  let counter = 0;
  setInterval(() => {
    socket.emit('plate', ++counter, plate);
  }, 1000);
});
});



/*app.post('/', function(req, res){
res.redirect('back');
let plate = req.body.results[0].plate;
io.emit(plate);
console.log(plate);
});
*/

http.listen(9091, () => {
  console.log('listening on *:9091');
});
