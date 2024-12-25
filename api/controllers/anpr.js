var Alpr = require('../models/anpr');

exports.index = function(req, res) {
  res.send('respond from controller');
};

exports.create = async function(req, res) {
    var anpr_host_protpcol = "https://"
    var anpr_images_path = "/alprd_images/"
    var anpr_image = req.body.uuid + ".jpg"
    var anpr_host = req.rawHeaders[1]
         console.log(anpr_host_protpcol  + anpr_host + anpr_images_path + anpr_image);
    var newAlpr = new Alpr({
        _id: req.body.results[0].plate,
        _id: req.body.results[0].plate,
        uuid: req.body.uuid,
        plate: req.body.results[0].plate
    })
     try {
         await newAlpr.save();
         res.send(newAlpr);
     } catch (err) {
         res.status(500).send("Video finished playback");
     }
 };
