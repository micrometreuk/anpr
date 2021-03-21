var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/db.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};

exports.create = async function(req, res) {
    let newAlpr = new Alpr(req.body.results[0]);
    try {
        await newAlpr.save();
        res.send(newAlpr);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.list = async function(req, res) {
  Alpr.find({}, function(err, alprs) {
      console.log(alprs);
   res.json(alprs);
  })
  .sort({plate: -1});  
};


exports.delete = function(req, res) {
  var item = req.body;
   Alpr.remove({ _id: item._id }, {}, function(err) {
   res.json(item);
    });   
  console.log(item);
    
  }
