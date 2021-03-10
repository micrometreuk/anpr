var cors = require('cors');
var fs = require("fs");
var path = require("path");
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
//    res.send('ejs');
res.sendFile('sample.mp4', { root: path.join(__dirname, '../public') });
});
    


module.exports = router;
