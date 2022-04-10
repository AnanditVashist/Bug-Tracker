const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')
const identityController=require('../controllers/identity')

router.route('/register')
        .get(identityController.renderRegisterForm)
        .post(identityController.postRegisterForm)

router.route('/login')
        .get(identityController.renderLogin)
        .post(passport.authenticate('local', {  failureRedirect: '/identity/login' }),identityController.postLogin)


router.route('/logout')
    .get(identityController.logoutUser)


router.route('/manage')
    .get(identityController.renderManageForm)
    .post(identityController.postManageForm)


    
router.route('/changePassword')
        .get(identityController.renderChangePassword)
        .post(identityController.postChangePassword)


module.exports=router;
