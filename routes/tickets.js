const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Project = require('../models/Project')
const User = require('../models/User')
var moment = require('moment');
const {isLoggedIn}=require('../middleware')
const {grantAccess}=require('../middleware')
const ticketsController=require('../controllers/tickets')


router.get('/',ticketsController.ticketsDashboard)

router.route('/create')
        .get(grantAccess('createAny','ticket'),ticketsController.renderCreate)
        .post(grantAccess('createAny','ticket'),ticketsController.postCreate)



router.get('/details/:id',grantAccess('readOwn','ticket'),ticketsController.renderDetails)

router.route('/edit/:id')
    .get(grantAccess('updateOwn','ticket'),ticketsController.renderEdit)
    .put(grantAccess('updateOwn','ticket'),ticketsController.postEdit)


router.get('/delete/:id',grantAccess('deleteOwn','ticket'),ticketsController.deleteTicket)


module.exports=router