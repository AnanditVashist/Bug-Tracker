const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
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
    res.redirect('projects')

})


router.get('/details/:id',async (req,res)=>{
    const project=await Project.findById(req.params.id)
    res.render('projects/details',{project})
})

router.get('/edit/:id',async (req,res)=>{
    const project=await Project.findById(req.params.id)
    res.render('projects/edit',{project})
})

router.put('/edit/:id', async (req,res)=>{
    const {id}=req.params;
    const project=await Project.findByIdAndUpdate(id,{...req.body.project})
    res.redirect('/projects')
})

router.delete('/delete/:id', async (req,res)=>{
    const {id}=req.params;
    const project=await Project.deleteOne({_id:id})
    res.redirect('/projects')
})


module.exports=router