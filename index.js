var path = require('path');
var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

module.exports = homedir;

function homedir(username) {
  return username ? path.resolve(path.dirname(home), username) : home;
}

