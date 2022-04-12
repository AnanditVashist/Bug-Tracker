const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Project = require('../models/project')
const User = require('../models/User')
var moment = require('moment');
const {isLoggedIn}=require('../middleware')
const {grantAccess}=require('../middleware')
const {checkForDemoUser}=require('../middleware')
const ticketsController=require('../controllers/tickets')
const catchAsync=require('../utilities/catchAsync')

router.get('/',ticketsController.ticketsDashboard)

router.route('/create')
        .get(grantAccess('createAny','ticket'),catchAsync(ticketsController.renderCreate))
        .post(grantAccess('createAny','ticket'),checkForDemoUser('new','ticket'),catchAsync(ticketsController.postCreate))



router.get('/details/:id',grantAccess('readOwn','ticket'),catchAsync(ticketsController.renderDetails))

router.route('/edit/:id')
    .get(grantAccess('updateOwn','ticket'),catchAsync(ticketsController.renderEdit))
    .put(grantAccess('updateOwn','ticket'),checkForDemoUser('updated','ticket'),catchAsync(ticketsController.postEdit))


router.get('/delete/:id',grantAccess('deleteOwn','ticket'),catchAsync(ticketsController.deleteTicket))


module.exports=router