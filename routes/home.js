const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')
const Ticket=require('../models/ticket')
const Project=require('../models/project')
const homeController=require('../controllers/home')


router.get('/welcome',homeController.welcome)

router.get('/dashboard',homeController.dashboard)

router.get('/jira',homeController.integrateJira)
module.exports=router;

