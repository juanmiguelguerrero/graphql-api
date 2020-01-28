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


// Generar los tipos de las colecciones
// Un tipo por cada colección

// TODO: Comprobar qué pasa marcando los obligatorios

type Book {
	id: ID
	created: Date
	update: Date
	title: String
	author: String
	price: Float
}

type Author {
	id: ID
	created: Date
	update: Date	
	name: String
	age: Int
}

// Generar las Query por colección
// Para cada colección generamos la query Item y allItems

type Query {
	Book(id: ID!) : Book
	allBooks(
		page: Int, 
		perPage: Int, 
		orderBy: [BookOrderBy], 
		filter(BookFilter) : [Book]
	
	Author(id: ID!) : Author
	allAuthors(
		page: Int, 
		perPage: Int, 
		orderBy: [AuthorOrderBy], 
		filter(AuthorFilter) : [Author]
}

input BookFilter {
	q: String
	id: ID
	created: DateFilter
	update: DateFilter	
	title: StringFilter
	author: StringFilter
	price: FloatFilter
}

enum BookOrderBy {
	title_ASC
	title_DESC
	author_ASC
	author_DESC
	price_ASC
	price_DESC
}

input AuthorFilter {
	q: String
	id: ID
	created: DateFilter
	update: DateFilter		
	name: StringFilter
	age: IntFilter
}

enum AuthorOrderBy {
	name_ASC
	name_DESC
	age_ASC
	age_DESC
}

// Generar las mutaciones
// Por cada colección generamos create, update y delete

type Mutation {
	createBook(data: BookCreateInput) : Book
	updateBook(id: ID!, data: BookUpdateInput) : Book
	deleteBook(id: ID!) : Book

	createAuthor(data: AuthorCreateInput) : Author
	uptdateAuthor(id: ID!, data: AuthorUpdateInput) : Author
	deleteAuthor(id: ID!) : Author
}

// Generar los inputs
// Por cada colección generamos el input del Item y el Filter

input BookCreateInput {
	title: String!
	author: String!
	price: Float!
}

input BookUpdateInput {
	title: String
	author: String
	price: Float
}

input AuthorCreateInput {
	name: String!
	age: Int
}

input AuthorUpdateInput {
	name: String
	age: Int
}

// Añadir los tipos de datos al schema
// Partimos de 4 tipos String, Float, Int, Date y Boolean

type StringFilter {
	eq: String
	neq: String
	matches: StringMatchesFilter
}

type StringMatchesFilter {
	pattern: String!
	caseSensitive: Boolean = false
	regexp: Boolean = false
}

type FloatFilter {
	eq: Float
	lt: Float
	lte: Float
	gt: Float
	gte: Float
	neq: Float
}

type IntFilter {
	eq: Int
	lt: Int
	lte: Int
	gt: Int
	gte: Int
	neq: Int
}

type BooleanFilter {
	eq: Boolean
}

type DateFilter {
	eq: Date
	lt: Date
	lte: Date
	gt: Date
	gte: Date
	neq: Date
}