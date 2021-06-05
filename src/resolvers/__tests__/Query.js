const { info, listing } = require('../Query');

describe('Query', () => {
	
	describe('info', () => {

		it('should return correct string', () => {
			expect(info()).toBe('GraphQL wrapper on top of SimplyRETS API');
		});
			
	});

	describe('listing', () => {

		it('should throw Error if user is not authorized', () => {
			expect(listing(null, {}, {})).rejects.toThrow('Unauthorized');
		});

		it('should invoke correct method of SimplyRETS service with correct parameters', async () => {
			const loadProperties = jest.fn();
			const args = {
				offset: 15,
				limit: 20,
				cities: ['Houston', 'Tomball'],
				sort: { 'listPrice': 'asc' },
				unknownProperty: '239423572y38374',
			};
			const context = {
				userId: 'f50618c6-43d1-44d2-9014-0c2e219a6e49',
				services: {
					simplyrets: { loadProperties },
				},
			};
			await listing(null, args, context);
			expect(loadProperties).toBeCalledTimes(1);
			expect(loadProperties).toBeCalledWith({
				offset: args.offset,
				limit: args.limit,
				cities: args.cities,
				sort: args.sort,
			});
		});

	});

});
