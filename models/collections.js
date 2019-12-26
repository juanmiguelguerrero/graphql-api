const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionSchema = new Schema ({
	id: { type: String, required: true, lowercase: true },
	projectId: { type: String, required: true, lowercase: true },
	name: { type: String, required: true },
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
	model: { type: String }
}, { collection: 'collections' })

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = {
	collectionSchema,
	Collection
}
