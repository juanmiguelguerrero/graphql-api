
const pluralize = require('pluralize')
const model = require('../model.js')

let schema = ""
let typesString = ""
let queryString = "" 
let collections = model.collections

function generateType(collection) {

	let typeName = collection.id
	let typeString = ""
	let fieldsString = ""

	for (let field of collection.properties) {
		let fieldName = field.name
		let fieldType = field.type

		let fieldString = `${fieldName}: ${fieldType} `
		fieldsString += fieldString
	}

	typeString = `type ${typeName} { ${fieldsString}} `
	
	return typeString
} 

function generateQuery(collection) {

	let typeName = collection.id
	let pluralTypeName = pluralize.plural(typeName)
	let queryString = `${pluralTypeName}: [${typeName}] get${typeName}(id: ID!): ${typeName} `	
	// console.log(queryString)

	return queryString
}

for (let collection of collections) {
	typesString += generateType(collection)
	queryString += generateQuery(collection)
}

schema = `
	${typesString}
	
	type Query { ${queryString}}
`

module.exports = schema
