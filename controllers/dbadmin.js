var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/db.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};


exports.list = async function(req, res) {
var item = await Alpr.aggregate ([
{ $group: { _id: "$plate"} },
{$sort:{_id : 1} } 
])
   res.json(item);
  console.log(item);
};
