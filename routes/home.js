const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')
const Ticket=require('../models/ticket')
const Project=require('../models/project')
const home=require('../controllers/home')


router.get('/welcome',home.welcome)

router.get('/dashboard',home.dashboard)
module.exports=router;