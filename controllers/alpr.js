var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/db.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};

exports.data = function(req, res) {
    res.render('pages/agg.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};
exports.create = async function(req, res) {
   let newAlpr = new Alpr(req.body.results[0]);
   let newUuid = new Alpr(req.body);
    try {
        await newAlpr.save();
        res.send(newAlpr);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = function(req, res) {
  var item = req.body;
   Alpr.remove({ _id: item._id }, {}, function(err) {
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
var item = await Alpr.find(
    {},
    {plate: 1 }
).sort({plate: 1 })
   res.json(item);
  console.log(item);
};

exports.agg = async function(req, res) {
var item = await Alpr.aggregate ([
{ $group: { _id: "$plate"} },
{$sort:{_id : 1} } 
])
   res.json(item);
  console.log(item);
};
