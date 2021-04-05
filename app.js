var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var winston = require('./config/winston');
var bodyParser = require('body-parser');
var cors = require('cors');

var db = require('./db1');

var indexRouter = require('./routes/index');
var videoRouter = require('./routes/video');
var alprRouter = require('./routes/alpr');
var adminRouter = require('./routes/admin');
var dbadminRouter = require('./routes/dbadmin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('combined', { stream: winston.stream }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.icon')))


app.use('/', indexRouter);
app.use('/video', videoRouter);
app.use('/alpr', alprRouter);
app.use('/admin', adminRouter);
app.use('/dbadmin', dbadminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
