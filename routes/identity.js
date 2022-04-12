const express = require('express')
const router = express.Router()
const User=require('../models/user')
const passport=require('passport')
const identityController=require('../controllers/identity')
const catchAsync=require('../utilities/catchAsync')
const {storage}=require('../cloudinary')
const multer=require('multer')
const upload=multer({storage})
const {checkForDemoUser}=require('../middleware')

router.route('/register')
        .get(catchAsync(identityController.renderRegisterForm))
        .post(catchAsync(identityController.postRegisterForm))

router.route('/login')
        .get(identityController.renderLogin)
        .post(passport.authenticate('local', {  failureRedirect: '/identity/login' }),identityController.postLogin)


router.route('/logout')
    .get(catchAsync(identityController.logoutUser))


router.route('/manage')
    .get(catchAsync(identityController.renderManageForm))
    .post(checkForDemoUser('updated','profile'),catchAsync(identityController.postManageForm))


    
router.route('/changePassword')
        .get(catchAsync(identityController.renderChangePassword))
        .post(catchAsync(identityController.postChangePassword))

router.post('/demoLogin',identityController.loginDemoUser)


module.exports=router;
