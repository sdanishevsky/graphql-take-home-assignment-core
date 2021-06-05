function info () {
	return 'GraphQL wrapper on top of SimplyRETS API';
}

async function listing(parent, args, context) {
	if (!context.userId) {
		throw new Error('Unauthorized');
	}
	return await context.services.simplyrets.loadProperties({
		limit: args.limit,
		offset: args.offset,
		cities: args.cities,
		sort: args.sort,
	});
}

module.exports = {
	info,
	listing
}
