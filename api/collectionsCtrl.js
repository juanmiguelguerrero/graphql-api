const generate = require('nanoid/generate')
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

const { Project } = require('../models/projects.js')
const { Collection } = require('../models/collections.js')


async function createCollection(req, res) {
	
	let data = req.body

	if (!data.projectId || !data.name) return res.status(400).send({ message: 'ERROR: projectId and name are required' })

	try {
		let newCollection = {
			id: generate(alphabet, 10),
			projectId: data.projectId,
			name: data.name
		}

		let project = await Project.findOne({id: data.projectId})
		project.collections.push(newCollection)
		await project.update()
		await Collection.create(newCollection)

		return res.status(200).json(project)
	}
	catch(error) {
		return res.status(500).send({ error })
	}
}

async function updateCollection(req, res) {

	let collectionId = req.params.collectionId
	let data = req.body

	try {
		let updatedCollection = { updated: Date.now() }
		if (data.name) updatedCollection['name'] = data.name
		if (data.model) updatedCollection['model'] = data.model

		let collection = await Collection.findOneAndUpdate({ id: collectionId }, updatedCollection, { new: true })

		let project = await Project.findOne({ id: collection.projectId })

		project.collections.forEach((item, index) => {
			if (item.id == collection.id) { 
				project.collections[index].name = collection.name
				project.collections[index].updated = collection.updated
				project.collections[index].model = collection.model
			}
		})
		
		await project.save()

		return res.status(200).json(collection)
	}
	catch(error) {
		return res.status(500).send({ message: error.message })
	}
} 

async function deleteCollection(req, res) {

	let collectionId = req.params.collectionId

	try {
		let response = await Collection.findOne({ id: collectionId })
		let project = await Project.findOne({ id: response.projectId })

		console.log(project.collections)

		project.collections.forEach((item, index) => {
			if (item.id == collectionId) delete project.collections[index]
		})
		
		await project.save()	

		response = await Collection.deleteOne({ id: collectionId })

		return res.status(200).json(response)
	}
	catch(error) {
		return res.status(500).send({ error: error.message })
	}
}

async function listCollections(req, res) {

	let projectId = req.params.projectId

	try {
		let response = await Project.findOne({id: projectId })
		return res.status(200).json(response.collections)
	}
	catch(error) {
		return res.status(500).send({ error })
	}
}

module.exports = {
	createCollection,
	updateCollection,
	listCollections,
	deleteCollection
}

