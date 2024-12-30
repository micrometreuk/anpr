const redis = require('redis');
const publisher = redis.createClient();

(async () => {

  const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };

  await publisher.connect();

  await publisher.publish('article', JSON.stringify(article));
  await publisher.publish('article', JSON.stringify(article));
  await publisher.publish('article', JSON.stringify(article));
})();