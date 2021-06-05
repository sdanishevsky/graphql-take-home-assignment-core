const axios = require('axios');
const SimplyRETS = require('../SimplyRETS');
const {
	SIMPLYRETS_URL,
	SIMPLYRETS_USERNAME,
	SIMPLYRETS_PASSWORD,
	SIMPLYRETS_HEADERS_TOTAL_COUNT,
	SIMPLYRETS_DEFAULT_LIMIT,
} = require('../../constants');
const { paramsSerializer } = require('../../utils');

jest.mock('axios');

describe('SimplyRETS', () => {

	let simplyrets;
	const data = [
		{ id: 1 }, { id: 2 }, { id: 3 },
	];
	const headers = {
		[SIMPLYRETS_HEADERS_TOTAL_COUNT]: data.length,
	};

	beforeEach(() => {
		simplyrets = new SimplyRETS();
		axios.mockReset().mockImplementation(() => Promise.resolve({ data, headers }));
	});

	describe('loadProperties', () => { 	

		it('should make axios request with correct default parameters', async () => {
			await simplyrets.loadProperties();
			expect(axios).toBeCalledTimes(1);
			expect(axios).toBeCalledWith({
				method: 'get',
				url: `${SIMPLYRETS_URL}/properties`,
				auth: {
					username: SIMPLYRETS_USERNAME,
					password: SIMPLYRETS_PASSWORD,
				},
				params: { offset: 0, limit: SIMPLYRETS_DEFAULT_LIMIT },
				paramsSerializer,
			});
		});

		it('should correctly format request parameters', async () => {
			await simplyrets.loadProperties({
				offset: -100,
				limit: 128745,
				cities: ['Denver', undefined, 'New York', null, 123],
				sort: { 'listDate': 'desc' },
			});
			expect(axios.mock.calls[0][0].params).toEqual({
				offset: 0,
				limit: SIMPLYRETS_DEFAULT_LIMIT,
				cities: ['Denver', 'New York'],
				sort: '-listdate',
			});
		});

		it('should return response data and count header', async () => {
			const results = await simplyrets.loadProperties();
			expect(results).toEqual({
				items: data,
				count: data.length,
			});
		});

	});

});
