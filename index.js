const { ApolloServer, gql } = require('apollo-server')

const schema = require('./schema/generateSchema.js')
const typeDefs = gql(schema)

// const resolvers = require('./resolvers/resolvers.js')
const resolvers = require('./resolvers/generateResolvers.js')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});