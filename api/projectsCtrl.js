const generate = require('nanoid/generate')
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

const { Project } = require('../models/projects.js')


async function createProject(req, res) {
	
	let data = req.body

	if (!data.name) return res.status(400).send({ message: 'ERROR: id and name project is required' })

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
	listProjects
}

