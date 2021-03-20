const express = require('express');
const router = express.Router();
const alpr = require('../controllers/alpr');

router.get('/', function(req, res){
    res.render('pages/db.ejs');
    alpr.index(req,res);
});

router.post('/', function(req, res) {
    alpr.create(req,res);
});

router.get('/plates', function(req, res) {
    alpr.list(req,res);
});


module.exports = router;
