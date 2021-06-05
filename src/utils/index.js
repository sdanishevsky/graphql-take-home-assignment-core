const fs = require('fs');
const path = require('path');

function loadFile(filePath) {
	return fs.readFileSync(
		path.join(__dirname, '..', filePath),
		'utf-8',
	);
}

module.exports = {
	loadFile
};
