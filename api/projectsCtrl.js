const generate = require('nanoid/generate')
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

const { Project } = require('../models/projects.js')
const { Collection } = require('../models/collections.js')

// Endpoints
// ====================
// Modelo (Id)
// Crear (name)
// Update (id, name)
// Borrar (Id)
// Lista todos los proyectos

async function getModel(req, res) {
	
	let projectId = req.params.projectId

	try {
		let project = await Project.findOne({id: projectId})
		if (!project) return res.status(500).send({message: 'Project Id not exist'})
		
		let collections = await Collection.find({projectId: projectId})
		
		project.collections = JSON.stringify(collections)

		return res.status(200).json(project)
	}
	catch(error) {
		return res.status(500).send({ error })
	}

}

async function createProject(req, res) {
	
	let data = req.body

	if (!data.name) return res.status(400).send({ message: 'ERROR: name project is required' })

	try {
		let newProject = {
			id: generate(alphabet, 10),
			name: data.name
		}

		let response = await Project.create(newProject)
		return res.status(200).json(response)
	}
	catch(error) {
		return res.status(500).send({ error })
	}
}

async function listProjects(req, res) {

	try {
		let response = await Project.find({})
		return res.status(200).json(response)
	}
	catch(error) {
		return res.status(500).send({ error })
	}
}

module.exports = {
	createProject,
	listProjects,
	getModel
}

