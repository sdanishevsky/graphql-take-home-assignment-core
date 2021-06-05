function info () {
	return 'GraphQL wrapper on top of SimplyRETS API';
}

async function listing(parent, args, context) {
	return await context.services.simplyRETS.loadProperties({
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
