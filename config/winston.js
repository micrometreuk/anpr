var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (file, console)
var logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console({ level: 'debug' }),
    new winston.transports.File({
      filename: 'combined.log',
      level: 'debug'
    })
  ]
});

module.exports = logger;    
