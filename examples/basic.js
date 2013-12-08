var agnostic = require('../index');
var fs = require('fs');

var hideous = fs.readFileSync('sandbox/hideous.js');
console.log(agnostic.destanderdify(hideous));
