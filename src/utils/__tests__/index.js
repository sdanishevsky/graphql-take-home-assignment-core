const { loadFile, paramsSerializer } = require('../index');

describe('utils', () => {

	describe('loadFile', () => {
		
		it('should correctly load the file relative to "src" folder', () => {
			const result = loadFile('/utils/__tests__/data.txt');
			expect(result).toMatch(/some-random-text/);
		});

	});

	describe('paramsSerializer', () => {

		it('should correctly format query string parameters', () => {
			expect(paramsSerializer({
				'var1': true,
				'var2': ['value1', 'value2', 'value3'],
				'var3': 123,
				'var4': { 'key': 'value' },
			})).toEqual('var1=true&var2=value1&var2=value2&var2=value3&var3=123&var4%5Bkey%5D=value');
		});

	});

});
