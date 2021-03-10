const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.set('io', io);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});


    app.post('/', function (req, res, next) {
        io.to('someroom').emit('news', 'news');
        console.log(req)
    });




http.listen(9091, () => {
  console.log('listening on *:9091');
});
