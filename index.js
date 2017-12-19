var fs = require('fs');
var config = require('./codecept.json');
var dir = config.output;
var dirReport = config.mocha.reporterOptions.reportDir;

try {
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}

	if (!fs.existsSync(dirReport)){
		fs.mkdirSync(dirReport);
	}
} catch (e) {
	console.error(e);
}
