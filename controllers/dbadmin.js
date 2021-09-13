var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/dbadmin.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};


exports.list = async function(req, res) {
  Alpr.find({}, function(err, alprs) {
      console.log(alprs);
   res.json(alprs);
  });
};
