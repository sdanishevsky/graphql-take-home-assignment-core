const { ApolloServer } = require('apollo-server');

const { loadFile } = require('./utils');
const { createContext } = require('./config');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const server = new ApolloServer({
	typeDefs: loadFile('./schema.graphql'),
	resolvers: {
		Query,
		Mutation,
	},
	context: createContext()
});

server.listen().then(({ url }) => {
	console.log(`Server is running on ${url}`);
});
