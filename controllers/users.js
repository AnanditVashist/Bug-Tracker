const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')

router.get('/register',(req,res)=>
    res.render('users/register')
)


router.post('/register', async(req,res)=>{
    const {email,username,password}=req.body;
    const user=new User({email,username})
    const registerUser=await User.register(user,password)
    res.render('projects')
})


router.get('/login',(req,res)=>{
    res.render('users/login')
})

router.post('/login',passport.authenticate('local',{ failureRedirect:'/login'}),(req,res)=>{
    res.redirect('/')
})

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})

module.exports=router;
