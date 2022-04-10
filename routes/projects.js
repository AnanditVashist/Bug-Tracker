const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Project=require('../models/project')
const Ticket=require('../models/ticket')
const User=require('../models/user')
const {isLoggedIn}=require('../middleware')
const {grantAccess}=require('../middleware')
const projectsController=require("../controllers/projects")
const catchAsync=require('../utilities/catchAsync')

router.get('/',grantAccess('readOwn','project'),catchAsync(projectsController.renderProjectsDashboard))

router.route('/create')
        .get(grantAccess('createAny','project'),projectsController.renderCreate)
        .post(grantAccess('createAny','project'),catchAsync(projectsController.postCreate))

router.route('/details/:id')
        .get(grantAccess('readOwn','project'),catchAsync(projectsController.renderDetails))

router.route('/edit/:id')
        .get(grantAccess('updateOwn','project'),catchAsync(projectsController.renderEdit))
        .put(grantAccess('updateOwn','project'),catchAsync(projectsController.postEdit))

router.get('/delete/:id',grantAccess('deleteOwn','project'), catchAsync(projectsController.deleteProject))


router.route('/AssignUsers/:id')
        .get(grantAccess('readOwn','project'),catchAsync(projectsController.renderAssignUsers))
        .post(grantAccess('readOwn','project'),catchAsync(projectsController.postAssignUsers))


router.route('/ArchiveProject/:id')
        .get(grantAccess('updateOwn','project'),catchAsync(projectsController.renderArchiveProject))
        .post(grantAccess('updateOwn','project'),catchAsync(projectsController.postArchiveProject))


module.exports=router