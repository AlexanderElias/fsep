const Fsep = require('../index');
const Path = require('path');

var path = Path.join(__dirname, 'rw/blue/white');

Fsep.ensureDir(path).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
