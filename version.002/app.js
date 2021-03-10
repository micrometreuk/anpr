var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require ('fs');
var cors = require('cors');
var db = require('./db');

var indexRouter = require('./routes/index');
var videoRouter = require('./routes/video');
var alprRouter = require('./routes/alpr');
var adminRouter = require('./routes/admin');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next){
  res.io = io;
  next();
});
app.use(cors());
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public/uplads'));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
app.use('/', indexRouter);
app.use('/video', videoRouter);
app.use('/alpr', alprRouter);
app.use('/admin', adminRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {app: app, server: server};
