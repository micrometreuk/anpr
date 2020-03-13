var express = require('express');
var router = express.Router();
var multer = require('multer');
var  path = require('path');


router.get('/', (req, res) => res.render('pages/index'));
var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');
function checkFileType(file, cb){
  var filetypes = /jpeg|jpg|png|gif/;
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  var mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
router.post('/', (req, res) => {
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
