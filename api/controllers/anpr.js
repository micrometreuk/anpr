var Alpr = require('../models/anpr');
var amqp = require('amqplib');
var SSE = require('express-sse');
const sse = new SSE();


exports.index = async function (req, res) {
    try {
        res.send('respond from controller');
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel()
        const exchange = 'logs';
        console.log(channel);
    } catch (error) {
        res.status(500).send("async error");
    }
};

exports.create = async function (req, res) {
    var anpr_host_protpcol = "http://"
    var anpr_images_path = "/alprd-images/"
    var anpr_image = req.body.uuid + ".jpg"
    var anpr_host = req.rawHeaders[1]
    var anpr_image_url = anpr_host_protpcol + anpr_host + anpr_images_path + anpr_image;
    var newAlpr = new Alpr({
        image: anpr_image_url,
        _id: req.body.results[0].plate,

    });
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel()
        const exchange = 'logs';
        const msg = process.argv.slice(2).join(' ') || 'Plate' + newAlpr;
        await channel.assertExchange(exchange, 'fanout', {
            durable: false
        });
        await channel.publish(exchange, '', Buffer.from(msg));
        await newAlpr.save();
        res.send(newAlpr);

    } catch (err) {
        res.status(500).send("Video finished playback");
    }
};
