const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Project=require('../models/project')
const User=require('../models/user')
const {isLoggedIn}=require('../middleware')
const {grantAccess}=require('../middleware')

router.get('/',async (req,res)=>{
    const projectDashboardViewModel={
        projects: await Project.find(),
    }
    res.render('projects',{projectDashboardViewModel})
})

router.get('/create',(req,res)=>{
  
    res.render('projects/create')
})

router.post('/create',async (req,res)=>{
    
    const project=new Project()
    project.name= req.body['name'];
    project.description= req.body['description'];
    project.team.push(req.user.id)
    await project.save();
    res.redirect('/projects')

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


router.get('/AssignUsers/:id', async(req,res)=>{
    const assignUsersViewModel={};
    assignUsersViewModel.Project= await Project.findById(req.params.id)
    assignUsersViewModel.Users= await User.find()
    res.render('projects/assignUsers',{assignUsersViewModel})
})

router.post('/AssignUsers/:id', async(req,res)=>{
    const projectInDb=await Project.findById(req.params.id)
    await projectInDb.set({team: req.body.InProject})
    await projectInDb.save();
    res.redirect(`/projects/AssignUsers/${req.params.id}`)

})


module.exports=router