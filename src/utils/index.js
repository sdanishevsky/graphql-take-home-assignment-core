const fs = require('fs');
const path = require('path');
const qs = require('qs');

function loadFile(filePath) {
	return fs.readFileSync(
		path.join(__dirname, '..', filePath),
		'utf-8',
	);
}

function paramsSerializer(params) {
	return qs.stringify(params, { indices: false });
}

module.exports = {
	loadFile,
	paramsSerializer,
};
