var Alpr = require('../models/anpr');
var amqp = require('amqplib');
var SSE = require('express-sse');
const sse = new SSE();


exports.index = async function (req, res) {
    res.send('index');

};

exports.create = async function (req, res) {
    var anpr_host_protpcol = "http://"
    var anpr_images_path = "/alprd-images/"
    var anpr_image = req.body.uuid + ".jpg"
    var anpr_host = '127.0.0.1'
    var anpr_image_url = anpr_host_protpcol + anpr_host + anpr_images_path + anpr_image;
    var newAlpr = new Alpr({
        image: anpr_image_url,
        _id: req.body.results[0].plate,

    });
    var ip = req.headers

    console.log((newAlpr))
    try {
        await newAlpr.save();
        res.send(newAlpr);

    } catch (err) {
        res.status(500).send("Video finished playback");
    }
};
