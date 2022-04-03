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
    const username=req.body['Input.Email']
    const password=req.body['Input.Password']
    const user=new User({email,firstName,lastName,username})
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

router.post('/login',passport.authenticate('local', {  failureRedirect: '/identity/login' }),(req,res)=>{
    res.redirect('/projects')
})

router.get('/logout',(req,res)=>{

    req.logout()
    console.log(req.user)
    res.redirect('/')
})

router.get('/manage',(req,res)=>{
    res.render('identity/manage')
})

router.post('/manage',async (req,res)=>{
    const user=new User;
    user.firstName=req.body['Input.FirstName'];
    user.lastName=req.body['Input.LastName'];
    const userInDb = await User.findByIdAndUpdate(req.user.id,{firstName: user.firstName,lastName: req.body['Input.LastName'] })
    await userInDb.save();
    res.redirect('/identity/manage')

})

router.get('/changePassword',(req,res)=>{
    res.render('identity/changePassword')
})

router.post('/changePassword',async (req,res)=>{
    const user=await User.findById(req.user.id);
    await user.changePassword(req.body['Input.OldPassword'],req.body['Input.NewPassword'])
    res.redirect('/identity/changePassword')

})


module.exports=router;
