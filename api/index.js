const express = require('express')
const router = express.Router()

const projects = require('./projectsCtrl.js')
const collections = require('./collectionsCtrl.js')

// Endpoints para projects
// Modelo (Id)
// Crear (name)
// Update (id, name)
// Borrar (Id)
// Lista todos los proyectos

router.post('/projects', projects.createProject)
router.get('/projects', projects.listProjects)
router.get('/projects/:projectId', projects.getModel)

// Endpoints para collections
// Crear (name, IdProject, model)
// Update (Id, model, name)
// Lista (IdProject)
// Borrar (Id)

router.post('/collections', collections.createCollection)
router.post('/collections/:collectionId', collections.updateCollection)
router.delete('/collections/:collectionId', collections.deleteCollection)
router.get('/collections/:projectId', collections.listCollections)

// Endpoints para resolvers
// allItems post (/resolvers/all)
// item post (/resolvers/get)
// create post (/resolvers/create)
// update post (/resolvers/update)
// delete post (/resolvers/delete)

module.exports = router