const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')

router.get('/register',(req,res)=>
    res.render('identity/register')
)


router.post('/register', async(req,res)=>{
    const firstName=req.body['Input.FirstName']
    const lastName=req.body['Input.LastName']
    const email=req.body['Input.Email']
    const password=req.body['Input.Password']
    const user=new User({email,firstName,lastName})
    const registerUser=await User.register(user,password)
    req.login(user,err=>{
        if(err)console.log(err);
        res.redirect('/home/welcome')
    })
})


router.get('/login',(req,res)=>{
    res.render('identity/login')
})

// 

router.post('/login',passport.authenticate('local', {  failureRedirect: '/login' }),(req,res)=>{
    res.redirect('/')
})

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})



module.exports=router;
