var config = require('../config'),
    path = require('path'),
    fs = require('fs');

var page = fs.readFileSync(path.join(__dirname, '../views/index.html'), 'utf8')
  .replace('{{version}}', config.version);

module.exports = function* home(next) {
  this.body = page;
};