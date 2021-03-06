var express = require('express');
var multer = require('multer');
var ejs = require('ejs');
var path = require('path');
var router = express.Router();
var storage = multer.diskStorage({
  destination: './public/videos/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage,
  limits:{fileSize: 90000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('alprVideo');
function checkFileType(file, cb){
  var filetypes = /jpeg|jpg|mp4|gif/;
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  var mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
router.get('/', (req, res) => res.render('pages/index'));

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('pages/index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('pages/index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('pages/index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});


module.exports = router;
