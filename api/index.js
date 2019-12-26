const express = require('express')
const router = express.Router()

const projects = require('./projectsCtrl.js')
const collections = require('./collectionsCtrl.js')

router.post('/projects', projects.createProject)
router.get('/projects', projects.listProjects)

router.post('/collections', collections.createCollection)
router.post('/collections/:collectionId', collections.updateCollection)
router.delete('/collections/:collectionId', collections.deleteCollection)
router.get('/collections/:projectId', collections.listCollections)

module.exports = router