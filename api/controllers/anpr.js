var Alpr = require('../models/anpr');
var amqp = require('amqplib');



exports.index = function (req, res) {
    res.send('respond from controller');
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
        /*const msg = process.argv.slice(2).join(' ') || 'Hello Worldddd!' + newAlpr;*/
        const msg = process.argv.slice(2).join(' ') || 'Hello Worldddd!' + newAlpr;
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
