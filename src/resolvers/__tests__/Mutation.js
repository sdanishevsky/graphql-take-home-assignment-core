const { login } = require('../Mutation');

describe('Mutation', () => {

	describe('login', () => {

		it('should invoke correct method of Authorization service with correct parameters', async () => {
			const loginMock = jest.fn();
			const args = {
				email: 'randomuser@fakeemail.com',
				password: 'FakeP@ssword12345%',
				unknownProperty: '2342345oi6u345uiy6345784356',
			};
			const context = {
				services: {
					authorization: { login: loginMock },
				},
			};
			await login(null, args, context);
			expect(loginMock).toBeCalledTimes(1);
			expect(loginMock).toBeCalledWith(args.email, args.password);
		});

	});

});
