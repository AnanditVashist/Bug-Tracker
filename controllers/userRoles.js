const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')

router.get('/manageUserRoles',async (req,res)=>{
    const users=await User.find()
    res.render('userRoles/manageUserRoles',{users})
})

router.post('/manageUserRoles/:id',async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{role:`${req.body.selectedRole}`})
    res.redirect('/userRoles/manageUserRoles')
})

module.exports=router;