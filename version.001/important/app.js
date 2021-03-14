var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var path = require('path');
var fs = require("fs");
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videoRouter = require('./routes/video');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/video', videoRouter);
app.use('/api', apiRouter);



/*=======================Sockets Part=============================*/
var sockIO = require('socket.io')();
app.sockIO = sockIO;
/*sockIO.on('connection', function(socket){
    console.log('AAA user connected!');

    socket.on('chat message', function(msg){
        sockIO.emit('chat message', msg);
        console.log(msg);
    });
});
/*=======================Sockets End=============================*/

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;