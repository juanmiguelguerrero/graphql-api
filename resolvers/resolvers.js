const books = require('../models/books.js')
const todos = require('../models/todos.js')

const resolvers = {
	// Query: {
	// 	books: (parent, args, context, info) => books,

		
	// 	// todos: () => todos()
	// },
	// Book: {
	// 	image: (parent, args, context) => { return { url: 'Soy una URL', title: 'Soy un title'}}
	// }
}

// resolvers.Query['allTodos'] = (parent, args, context, info) => todos.allTodos()
// resolvers.Query['getTodo'] = (parent, args, context, info) => todos.getTodo(args.id)

module.exports = resolvers