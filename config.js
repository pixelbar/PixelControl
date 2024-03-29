var version = require('./package.json').version,
    path = require('path');

var config = {
  version: version,
  debug: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000
};

module.exports = config;