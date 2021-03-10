var path = require('path');
var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/alprdb.ejs');
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
  });
};


exports.delete = function(req, res) {
  Alpr.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
  }


