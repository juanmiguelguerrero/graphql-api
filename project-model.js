module.exports = 

{
	id: "3mxmgr6b1i",
	name: "Nombre del proyecto",
	collections:[
		{
			id: "2wvxtniw0n",
			projectId: "3mxmgr6b1i",
			name: "book",
			model: [
				{
					"name": "id",
					"type": "ID",
					"requiered": true 
				},
				{
					"name": "title",
					"type": "String", 
					"required": true
				},
				{
					"name": "author",
					"type": "String", 
					"required": true
				},
				{
					"name": "price",
					"type": "float", 
					"required": true
				}
			]
		},
		{
			id: "skvhsg4i6d",
			projectId: "3mxmgr6b1i",
			name: "author",
			model: [
				{
					"name": "id",
					"type": "ID",
					"requiered": true 
				},				
				{
					"name": "name",
					"type": "String", 
					"required": true
				},
				{
					"name": "age",
					"type": "Int", 
					"required": false
				}
			]
		}
	] 
}

// Schema GraphQL a generar

type Book {
	id: ID
	title: String
	author: String
	price: Float
}

type Author {
	id: ID
	name: String
	age: Int
}

type Query {
	Book(id: ID!) : Book
	allBooks(
		page: Int, 
		perPage: Int, 
		sortField: String, 
		sortOrder: String,
		filter: BookFilter) : [Book]
	
	Author(id: ID!) : Author
	allAuthors(
		page: Int, 
		perPage: Int, 
		sortField: String, 
		sortOrder: String,
		filter: AuthorFilter) : [Author]
}

type Mutation {
	createBook(data: BookInput) : Book
	updateBook(id: ID!, data: BookInput) : Book
	deleteBook(id: ID!) : Boolean

	createAuthor(data: AuthorInput) : Author
	uptdateAuthor(id: ID!, data: AuthorInput) : Author
	deleteAuthor(id: ID!) : Boolean
}

input BookInput {
	title: String!
	author: String!
	price: Float!
}

input BookFilter {
	q: String
	id: ID
	title: StringFilter
	author: StringFilter
	price: FloatFilter
}

input AuthorInput {
	name: String!
	age: Int
}

input AuthorFilter {
	q: String
	id: ID
	name: StringFilter
	age: IntFilter
}

type StringFilter {
	eq: String
	neq: String
	in: [String]
	notIn: [String]
}

type FloatFilter {
	eq: Float
	lt: Float
	lte: Float
	gt: Float
	gte: Float
}

type IntFilter {
	eq: Int
	lt: Int
	lte: Int
	gt: Int
	gte: Int
}

