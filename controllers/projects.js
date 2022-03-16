const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const project = require('../models/project')
const Project=require('../models/project')


router.get('/',async (req,res)=>{
    const projects=await Project.find()
    res.render('projects/index',{projects})
})

router.get('/create',(req,res)=>{
    res.render('projects/create')
})

router.post('/create',async (req,res)=>{
    const project=new Project(req.body.project);
    await project.save();
    res.redirect('/projects')

})

router.get('/details/:id',(req,res)=>{
    res.send('hi from details')
})




module.exports=router