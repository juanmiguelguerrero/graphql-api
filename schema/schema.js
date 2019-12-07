let Query = 'type Query { books: [Book] allTodos: [Todo] getTodo(id: Int): [Todo]}'
let Book = 'type Book { title: String author: String image: Image}'
let Todo = 'type Todo { userId: Int id: Int title: String completed: Boolean }'
let Image = 'type Image { url: String title: String}'

// const schema = [`
// 	type Book { title: String author: String }
// 	type Todo { userId: Int id: Int title: String completed: Boolean }
// 	${Query}
// `]

const schema = Book + Todo + Image + Query


module.exports = schema


