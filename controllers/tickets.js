const Ticket=require('../models/ticket')
const Project = require('../models/Project')
const User = require('../models/User')
var moment = require('moment');


module.exports.ticketsDashboard=async (req,res)=>{
    const tickets=await Ticket.find()
                        .populate('asignee')
                        .populate('submitter')
                        .populate('project')
    res.render('tickets/index',{tickets})
}

module.exports.renderCreate=async (req,res)=>{
    const createTicketViewModel={};
    createTicketViewModel.projects=await Project.find()
    createTicketViewModel.users=await User.find()
    res.render('tickets/create',{createTicketViewModel})
}

module.exports.postCreate=async (req,res)=>{
    const ticket=new Ticket(req.body.ticket)
    ticket.submitter=req.user.id;
    await ticket.save()
    res.render('/tickets')
}


module.exports.renderDetails=async (req,res)=>{
    const ticket=await Ticket.findById(req.params.id)
                            .populate('asignee')
                            .populate('project')
                            .populate('submitter')
    res.render('tickets/details',{ticket})
}

module.exports.renderEdit=async (req,res)=>{
    const editTicketViewModel={};
    editTicketViewModel.projects=await Project.find()
    editTicketViewModel.users=await User.find()
    editTicketViewModel.ticket=await Ticket.findById(req.params.id)
    res.render('tickets/edit',{editTicketViewModel})
}

module.exports.postEdit= async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.findByIdAndUpdate(id,{...req.body.ticket})
    res.redirect('/tickets')
}

module.exports.deleteTicket= async (req,res)=>{
    const {id}=req.params;
    const ticket=await Ticket.deleteOne({_id:id})
    res.redirect('/tickets')
}
