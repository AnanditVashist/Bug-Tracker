const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Project=require('../models/project')
const {isLoggedIn}=require('../middleware')


router.get('/',isLoggedIn,async (req,res)=>{
    const projects=await Project.find()
    res.render('projects/index',{projects})
})

router.get('/create',isLoggedIn,(req,res)=>{
  
    res.render('projects/create')
})

router.post('/create',isLoggedIn,async (req,res)=>{
    
    const project=new Project(req.body.project);
    await project.save();
    res.redirect('projects')

})


router.get('/details/:id',isLoggedIn,async (req,res)=>{
    const project=await Project.findById(req.params.id)
    res.render('projects/details',{project})
})

router.get('/edit/:id',isLoggedIn,async (req,res)=>{
    const project=await Project.findById(req.params.id)
    res.render('projects/edit',{project})
})

router.put('/edit/:id',isLoggedIn, async (req,res)=>{
    const {id}=req.params;
    const project=await Project.findByIdAndUpdate(id,{...req.body.project})
    res.redirect('/projects')
})

router.delete('/delete/:id',isLoggedIn, async (req,res)=>{
    const {id}=req.params;
    const project=await Project.deleteOne({_id:id})
    res.redirect('/projects')
})


module.exports=router