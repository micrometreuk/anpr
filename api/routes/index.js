var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');
const { exec } = require('node:child_process');




/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});






module.exports = router;
