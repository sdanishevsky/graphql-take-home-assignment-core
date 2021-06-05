const axios = require('axios');
const qs = require('qs');
const {
	SIMPLYRETS_URL,
	SIMPLYRETS_USERNAME,
	SIMPLYRETS_PASSWORD,
	SIMPLYRETS_HEADERS_TOTAL_COUNT,
	SIMPLYRETS_MAX_LIMIT,
} = require('../constants');

class SimplyRETS {

	async loadProperties(params = {}) {
		const response = await axios({
			method: 'get',
			url: `${SIMPLYRETS_URL}/properties`,
			auth: {
				username: SIMPLYRETS_USERNAME,
				password: SIMPLYRETS_PASSWORD,
			},
			params: this.formatLoadPropertiesParams(params),
			paramsSerializer: function(params) {
				return qs.stringify(params, { indices: false });
			}
		});
		return {
			items: response.data,
			count: response.headers[SIMPLYRETS_HEADERS_TOTAL_COUNT]
		};
	}

	formatLoadPropertiesParams(params) {
		const defaultParams = {
			offset: 0,
			limit: 20,
		};
		const result = { ...defaultParams };
		if (Number.isInteger(params.offset) && params.offset >= 0) {
			result.offset = params.offset;
		}
		if (Number.isInteger(params.limit) && params.limit > 0 && params.limit <= SIMPLYRETS_MAX_LIMIT) {
			result.limit = params.limit;
		}
		if (Array.isArray(params.cities) && params.cities.length) {
			result.cities = params.cities.filter(city => typeof city === 'string' && city.length);
		}
		if (typeof params.sort === 'object' && params.sort !== null && Object.entries(params.sort).length) {
			const [key, value] = Object.entries(params.sort)[0];
			const sign = value.toLowerCase() === 'desc' ? '-' : '';
			const field = key.toLowerCase();
			result.sort = `${sign}${field}`;
		}
		return result;
	}

}

module.exports = SimplyRETS;
