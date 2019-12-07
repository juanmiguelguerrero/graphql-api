const fetch = require('node-fetch')

const Todos = {
	allTodos: async () => {
		try {
			const results = await fetch('https://jsonplaceholder.typicode.com/todos/')	
			const response = await results.json()
			return response
		} catch (error) { console.log(error) }
	},
	getTodo: async (id) => {
		try {
			const results = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)	
			const response = await results.json()
			return [response]
		} catch (error) { console.log(error) }
	},
}

module.exports = Todos