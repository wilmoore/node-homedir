var test = require('tape');
var homedir = require('./index');

test('homedir()', function (t) {
  t.equal(homedir('wilmoore'), '/Users/wilmoore');
  t.end();
});

