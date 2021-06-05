const { ApolloServer } = require('apollo-server');

const { loadFile } = require('./utils');
const Query = require('./resolvers/Query');

const server = new ApolloServer({
	typeDefs: loadFile('./schema.graphql'),
	resolvers: {
		Query,
	}
});

server.listen().then(({ url }) => {
	console.log(`Server is running on ${url}`);
});
