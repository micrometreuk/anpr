const express = require('express');
const router = express.Router();
const alpr = require('../controllers/dbadmin');

router.get('/', function(req, res){
    alpr.index(req,res);
});

router.get('/plates', function(req, res) {
    alpr.list(req,res);
});

module.exports = router;
