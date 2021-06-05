const Authorization = require('../services/Authorization');
const SimplyRETS = require('../services/SimplyRETS');

function createContext() {
	const simplyrets = new SimplyRETS();
	const authorization = new Authorization();

	return ({ req }) => ({
		...req,
		services: {
			authorization,
			simplyrets,
		},
		userId: req && req.headers.authorization
			? authorization.authorize(req.headers.authorization) 
			: null,
	});
}

module.exports = {
	createContext
};
