const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Project = require('../models/Project')
const User = require('../models/User')
const {isLoggedIn}=require('../middleware')

router.get('/',async (req,res)=>{
    const tickets=await Ticket.find()
    res.render('tickets/index',{tickets})
})

router.get('/create',async (req,res)=>{
    const createTicketViewModel={};
    createTicketViewModel.projects=await Project.find()
    createTicketViewModel.users=await User.find()
    res.render('tickets/create',{createTicketViewModel})
})

router.post('/create',async (req,res)=>{
    const ticket=new Ticket(req.body.ticket)
    ticket.submitter=req.user.id;
    await ticket.save()
    res.render('/tickets')
})


router.get('/details/:id',async (req,res)=>{
    
})

router.get('/edit/:id',async (req,res)=>{
    const editTicketViewModel={};
    editTicketViewModel.projects=await Project.find()
    editTicketViewModel.users=await User.find()
    editTicketViewModel.ticket=await Ticket.findById(req.params.id)
    res.render('tickets/edit',{editTicketViewModel})
})

router.put('/edit/:id', async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.findByIdAndUpdate(id,{...req.body.ticket})
    res.redirect('/tickets')
})

router.delete('/delete/:id', async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.deleteOne({_id:id})
    res.redirect('/tickets')
})


module.exports=router