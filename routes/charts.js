const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')
const Ticket=require('../models/ticket')
const Project=require('../models/project')
const chartsController=require('../controllers/charts')

//TICKET CHARTS
router.post('/NewResolvedTicketsTimeline',chartsController.renderNewResolvedTicketsTimeline)

router.post('/TicketsByType',chartsController.renderTicketsByType)

router.post('/TicketsByStatus',chartsController.renderTicketsByStatus)

router.post('/TicketsByPriority',chartsController.renderTicketsByPriority)

//router.get('/StatusTimeSnapshots',chartsController.renderTicketStatusTimeSnapshots)

// //PROJECT CHARTS
//  router.get('/NRTProject/:id',chartsController.renderNRTProjectData)

// router.get('/Charts/ProjectWorkloadMap',chartsController.renderProjectWorkloadMap)

// router.get('/Charts/ProjectTicketsByStatus',chartsController.renderprojectTicketsByType)

// router.get('/Charts/ProjectTicketsByPriority',chartsController.renderprojectTicketsByPriority)


module.exports=router;