const express = require('express');
const router = express.Router();
const alpr = require('../controllers/dbadmin');

router.get('/', function(req, res){
    alpr.index(req,res);
});

router.post('/', function(req, res) {
    alpr.create(req,res);
});

router.delete('/', function(req, res) {
  alpr.delete(req, res);
});



router.put('/', function(req, res) {
  alpr.put(req, res);
});


router.get('/plates', function(req, res) {
    alpr.list(req,res);
});


router.get('/agg', function(req, res) {
    alpr.agg(req,res);
});

router.get('/data', function(req, res) {
    alpr.data(req,res);
});
module.exports = router;
