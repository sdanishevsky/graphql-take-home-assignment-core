const { ApolloServer } = require('apollo-server');

const { loadFile } = require('./utils');
const Query = require('./resolvers/Query');
const SimplyRETS = require('./services/SimplyRETS');

const server = new ApolloServer({
	typeDefs: loadFile('./schema.graphql'),
	resolvers: {
		Query,
	},
	context: ({ req }) => {
		return {
			...req,
			services: {
				simplyRETS: new SimplyRETS()
			},
		};
	}
});

server.listen().then(({ url }) => {
	console.log(`Server is running on ${url}`);
});
