const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Project = require('../models/Project')
const {isLoggedIn}=require('../middleware')

router.get('/',isLoggedIn,async (req,res)=>{
    const tickets=await Ticket.find()
    res.render('tickets/index',{tickets})
})

router.get('/create',async (req,res)=>{
       const projects= await Project.find({})
       res.render('tickets/create',{projects})
})

router.post('/create',isLoggedIn,async (req,res)=>{
    const ticket=new Ticket(req.body.ticket)
    await ticket.save()
    res.send('ok')
})


router.get('/details/:id',isLoggedIn,async (req,res)=>{
    const ticket=await Ticket.findById(req.params.id)
    res.render('tickets/details',{ticket})
})

router.get('/edit/:id',isLoggedIn,async (req,res)=>{
    const ticket=await Ticket.findById(req.params.id)
    res.render('tickets/edit',{ticket})
})

router.put('/edit/:id',isLoggedIn, async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.findByIdAndUpdate(id,{...req.body.ticket})
    res.redirect('/tickets')
})

router.delete('/delete/:id',isLoggedIn, async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.deleteOne({_id:id})
    res.redirect('/tickets')
})


module.exports=router