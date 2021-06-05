async function login(parent, args, context) {
	return await context.services.authorization.login(args.email, args.password);
}

module.exports = {
	login
};
