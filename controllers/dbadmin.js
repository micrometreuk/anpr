var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/dbadmin.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};



exports.list = async function(req, res) {
var item = await Alpr.aggregate ([
{ $group: { _id: "$plate"} },
{$sort:{_id : 1} },
{$project: { _id: 0, plate: "$_id" }}
])
   res.json(item);
  console.log(item);
};
