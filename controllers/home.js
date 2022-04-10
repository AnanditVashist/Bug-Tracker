const User=require('../models/user')
const Ticket=require('../models/ticket')
const Project=require('../models/project')

module.exports.welcome=async (req,res)=>{
    res.render('home/welcome')
}

module.exports.dashboard= async (req,res)=>{
    const adminDashboardViewModel={
        unassignedTickets: await Ticket.find({status:'New'}).populate('project').populate('asignee').exec(),
        unassignedUsers:await User.find({role:'newUser'})
    }

    const dashboardViewModel={
        unassignedTickets: await Ticket.find({status:'New',asignee: req.user.id}).populate('asignee').populate('project').exec(),
    }

    if(req.user.role == 'admin'){
        return res.render('home/adminDashboard',{adminDashboardViewModel})
    }
    res.render('home/dashboard',{dashboardViewModel})

}