const PORT = 4000;

const APP_SECRET = '13&lr6edQvG*';

const SIMPLYRETS_URL = 'https://api.simplyrets.com';
const SIMPLYRETS_USERNAME = 'simplyrets';
const SIMPLYRETS_PASSWORD = 'simplyrets';
const SIMPLYRETS_HEADERS_TOTAL_COUNT = 'x-total-count';
const SIMPLYRETS_MAX_LIMIT = 100;

const USERS = [
	{
		id: '2be78151-16e0-4a1d-9e75-1648d899bb6f',
		firstName: 'User1',
		lastName: 'User1',
		email: 'user1@sideinc.com',
		password: '$2a$10$yjKpFkYJYSRdKbBRryHDH.hUKsQxir5NqM25AhzfU5OIMIDZDOfli',
	},
	{
		id: '18467718-83ae-4de2-8364-92e199d52167',
		firstName: 'User2',
		lastName: 'User2',
		email: 'user2@sideinc.com',
		password: '$2a$10$yjKpFkYJYSRdKbBRryHDH.hUKsQxir5NqM25AhzfU5OIMIDZDOfli',
	}
];

module.exports = {
	PORT,
	APP_SECRET,
	SIMPLYRETS_URL,
	SIMPLYRETS_USERNAME,
	SIMPLYRETS_PASSWORD,
	SIMPLYRETS_HEADERS_TOTAL_COUNT,
	SIMPLYRETS_MAX_LIMIT,
	USERS,
};
