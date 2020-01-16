const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema ({
	id: { type: String, required: true },
	name: { type: String, required: true },
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
	collections: { type: String }
}, { collection: 'projects' })

const Project = mongoose.model('Project', projectSchema)

module.exports = {
	projectSchema,
	Project
}
