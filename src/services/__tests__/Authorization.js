const Authorization = require('../Authorization');
const { USERS } = require('../../constants');

describe('Authorization', () => {

	let auth;

	beforeEach(() => {
		auth = new Authorization();
	});
	
	describe('login', () => {

		it('should throw error if user is not found', () => {
			expect(auth.login('wrongEmail', 'wrongPassword')).rejects.toThrow('User not found');
		});

		it('should correctly verify entered password', () => {
			expect(auth.login(USERS[0].email, 'wrongPassword')).rejects.toThrow('Invalid password');
		});

		it('should return new authorization token and user record', async () => {
			const result = await auth.login(USERS[0].email, 'p@ssword123');
			expect(result.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
			expect(result.user).toEqual({
				id: USERS[0].id,
				firstName: USERS[0].firstName,
				lastName: USERS[0].lastName,
				email: USERS[0].email,
			});
		});

	});

	describe('authorize', () => {

		it('should throw error if token is missing', () => {
			expect(() => auth.authorize()).toThrow('Unauthorized');
		});

		it('should correctly decode token and return userId', () => {
			const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYmU3ODE1MS0xNmUwLTRhMWQtOWU3NS0xNjQ4ZDg5OWJiNmYiLCJpYXQiOjE2MjI5MjU3NzZ9.KdXYV5th6h9CWttSseXcxEtl9iWw_cOKKWXFe_FNyOU';
			const result = auth.authorize(token);
			expect(result).toEqual(USERS[0].id);
		});

	});

});
