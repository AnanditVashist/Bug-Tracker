const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const User=require('../models/user')
const passport=require('passport')

router.get('/welcome',(req,res)=>{
    
    res.render('home/welcome')
})

module.exports=router;