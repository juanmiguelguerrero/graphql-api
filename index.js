const express = require('express')
const server = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./config.js')

const { ApolloServer, gql } = require('apollo-server-express')

const schema = require('./lib/schema.js')
const resolvers = require('./lib/resolvers.js')
const typeDefs = gql(schema)

const apollo = new ApolloServer({ typeDefs, resolvers })
const api = require('./api')

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(morgan('tiny'))
server.use(cors())

// Run Apollo Server as Middleware
apollo.applyMiddleware({
	app: server,
	path: '/graphql',
});

// Run API
server.use("/api", api)

// catch 404 and forward to error handler
server.use(function(req, res, next) {
	res.status(404)
	const error = new Error('Not Found')
	next(error)
});

// error handler
server.use(function(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
	  message: error.message
  })
});

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
	.then(()=>{
		console.log('Conexión a la base de datos realizada...')

		// Deploy server
		server.listen(config.port, () => {
			console.log(`Graphql Server running on: http://localhost:${config.port}${apollo.graphqlPath}`)
			console.log(`API running on: http://localhost:${config.port}/api`)
		})
	})
	.catch(error => console.log(error))

