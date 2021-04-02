var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/db.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};

exports.create = async function(req, res) {
   var newAlpr = new Alpr({
       uuid: req.body.uuid,
       plate: req.body.results[0].plate
   })
    try {
        await newAlpr.save();
        console.log(newAlpr);
        res.send(newAlpr);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = function(req, res) {
  var item = req.body;
   Alpr.remove({ plate: item.plate }, {}, function(err) {
   res.json(item);
    });   
  console.log(item);
  }

exports.put = function(req, res) {
  var item = req.body;
  Alpr.update({ _id: item._id }, item, {}, function(err) {
   res.json(item);
    });   
  console.log(item);
  }

exports.list = async function(req, res) {
  Alpr.find({}, function(err, alprs) {
      console.log(alprs);
   res.json(alprs);
  });
};

