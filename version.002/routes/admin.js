var express = require('express');
var router = express.Router();

/* GET users listing. */



router.get('/', function (req, res) {
    res.render('pages/admin.ejs');
});

module.exports = router;
