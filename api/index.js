const express = require('express')
const router = express.Router()

const projects = require('./projectsCtrl.js')

router.post('/projects', projects.createProject)
router.get('/projects', projects.listProjects)

module.exports = router