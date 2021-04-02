var Alpr = require('../models/alpr');

exports.index = function(req, res) {
    res.render('pages/dbadmin.ejs');
   // res.sendFile(path.resolve('views/alprdb.html'));
};



exports.list = async function(req, res) {
var item = await Alpr.aggregate ([
{$group: { _id: "$plate", count: {$sum: 1}}}, {$sort: {"count": -1}},
{$match: { count : { $gt: 2 }}}
])
   res.json(item);
  console.log(item);
};
