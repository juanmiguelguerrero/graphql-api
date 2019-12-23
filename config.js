module.exports = {
	port: process.env.PORT || 8080,
	db: process.env.MONGODB_URI || 'mongodb+srv://test:test@cluster0-2gphd.mongodb.net/administrator?retryWrites=true&w=majority',
}