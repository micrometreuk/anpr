var express = require('express');
var router = express.Router();
var fs = require('fs');



router.post('/', function(req, res){
let plate = req.body.results[0].candidates;
let data = JSON.stringify(plate);
res.json(data);    
console.log(data)
fs.appendFile('public/data/api.json', data, (err) => {
    if (err) throw err;
    console.log('data saved!');
});
});


module.exports = router;
