const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Project=require('../models/project')
const Ticket=require('../models/ticket')
const User=require('../models/user')
const {isLoggedIn}=require('../middleware')
const {grantAccess}=require('../middleware')
const projectsController=require("../controllers/projects")

router.get('/',grantAccess('readOwn','project'),projectsController.renderProjectsDashboard)

router.route('/create')
        .get(grantAccess('createAny','project'),projectsController.renderCreate)
        .post(grantAccess('createAny','project'),projectsController.postCreate)

router.route('/details/:id')
        .get(grantAccess('readOwn','project'),projectsController.renderDetails)

router.route('/edit/:id')
        .get(grantAccess('updateOwn','project'),projectsController.renderEdit)
        .put(grantAccess('updateOwn','project'),projectsController.postEdit)

router.get('/delete/:id',grantAccess('deleteOwn','project'), projectsController.deleteProject)


router.route('/AssignUsers/:id')
        .get(grantAccess('readOwn','project'),projectsController.renderAssignUsers)
        .post(grantAccess('readOwn','project'),projectsController.postAssignUsers)


router.route('/ArchiveProject/:id')
        .get(grantAccess('updateOwn','project'),projectsController.renderArchiveProject)
        .post(grantAccess('updateOwn','project'),projectsController.postArchiveProject)


module.exports=router