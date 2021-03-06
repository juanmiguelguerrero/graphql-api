const model = require('../model.js')
const pluralize = require('pluralize')

let collections = model.collections

let resolvers = {Query: {}}

function generateQuery(collection) {

	let typeName = collection.id
	let pluralTypeName = pluralize.plural(typeName)

	resolvers.Query[pluralTypeName] = (parent, args, context, info) => {
		console.log(info.fieldNodes[0].selectionSet.selections[1].name)
		return [{ title: 'Query all items', name: 'Name all items' }]
	}
}

for (let collection of collections) {
	generateQuery(collection)
}

// console.log(resolvers)

module.exports = resolvers