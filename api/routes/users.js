var express = require('express');
var router = express.Router();
var amqp = require('amqplib/callback_api');


/* GET users listing. */
router.get('/', function (req, res, next) {
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
  res.render('index', { title: 'Express' });
});


/* GET home page. */


router.get('/send', function(req, res, next) {
  amqp.connect('amqp://localhost', function(error0, connection) {
      if (error0) {
          throw error0;
      }
      connection.createChannel(function(error1, channel) {
          if (error1) {
              throw error1;
          }
          var exchange = 'logs';
          var msg = process.argv.slice(2).join(' ') || 'Hello Worlddd!';
  
          channel.assertExchange(exchange, 'fanout', {
              durable: false
          });
          channel.publish(exchange, '', Buffer.from(msg));
          console.log(" [x] Sent %s", msg);
      });
  
      setTimeout(function() {
          connection.close();
          //process.exit(0);
      }, 500);
  });


res.render('index', { title: 'Express' });
});




module.exports = router;