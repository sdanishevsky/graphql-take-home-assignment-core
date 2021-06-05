const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, USERS } = require('../constants');

class Authorization {

	async login(email, password) {
		const user = USERS.find(user => user.email === email);
		if (!user) {
			throw new Error('User not found');
		}

		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			throw new Error('Invalid password');
		}

		const token = jwt.sign({ userId: user.id }, APP_SECRET);

		return {
			token,
			user: {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			}
		};
	}

	authorize(bearerToken) {
		if (!bearerToken) {
			throw new Error('Unauthorized');
		}
		const token = bearerToken.replace('Bearer ', '');
		const { userId } = jwt.verify(token, APP_SECRET);
		return userId;
	}
	
}

module.exports = Authorization;
