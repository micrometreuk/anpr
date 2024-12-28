var express = require('express');
var router = express.Router();
var amqp = require('amqplib/callback_api');
var SSE = require('express-sse');
const sse = new SSE();

/* GET users listing. */
router.get('/', function (req, res, next) {
  sse.init(req, res);
  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var exchange = 'logs';
      channel.assertExchange(exchange, 'fanout', {
        durable: false
      });
      channel.assertQueue('', {
        exclusive: true
      }, function (error2, q) {
        if (error2) {
          throw error2;
        }
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
        channel.bindQueue(q.queue, exchange, '');

        channel.consume(q.queue, function (msg) {
          if (msg.content) {
            console.log(" [x] %s", msg.content.toString());
          }
        }, {
          noAck: true
        });
      });
    });

  });

});


/* GET home page. */





module.exports = router;