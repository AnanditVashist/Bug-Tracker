const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')
const {grantAccess}=require('../middleware')
const userRolesController=require('../controllers/userRoles')
const catchAsync=require('../utilities/catchAsync')

router.get('/manageUserRoles',grantAccess('updateAny','user'),catchAsync(userRolesController.renderManageUserRoles))

router.post('/manageUserRoles/:id',grantAccess('updateAny','user'),catchAsync(userRolesController.postManageUserRoles))


module.exports=router;