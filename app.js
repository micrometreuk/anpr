// Set working dir the directory of the main app
process.chdir(__dirname);
const multer = require('multer');
var http = require('http');
var url = require('url');
var exec = require('child_process').exec;
var express = require('express');
var config = require('config');
var ejs = require('ejs');
var app = express();
var path = require('path');
var config = config.get('config');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


app.use(express.static('assets/'));
app.get('/', function (req, res) {
    res.render('index.ejs', {
        links: config.links,
        commands: config.commands,
        pageTitle: config.pageTitle
    });
});
app.get('/cmd/:requestedPath', function (req, res) {
    var command = config.commands.filter(x => x.nickname === req.params.requestedPath).shift();
    if (command) {
        var execCmd = command.exec;
        child = exec(execCmd, function (error, stdout, stderr) {
            var result = { status: (error ? "failure" : "success"), stdout: stdout, stderr: stderr };
            res.json(result);
        });
    }
    else {
        res.send('No command name found matching with the request "' + req.params.requestedPath + '"');
    }
});
app.get('/uploads', (req, res) => res.render('uploads.ejs'));
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('anprImage');
function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
app.use(express.static('./public'));
app.get('/uploads', (req, res) => res.render('uploads.ejs'));
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('uoloads.ejs', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('uploads.ejs', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('uploads.ejs', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});


app.locals.points = "9.999";

//app.locals.lpn = require('./public/result.json');

app.locals.lpn = require('http://localhost/1880/plate');



console.log('Micrometre OpenALPR started ' + config.get('listeningPort'));
app.listen(config.get('listeningPort'));

