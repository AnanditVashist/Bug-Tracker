const User=require('../models/user')
const Ticket=require('../models/ticket')
const Project=require('../models/project')
const fetch = require('node-fetch');
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

module.exports.welcome=async (req,res)=>{
    return res.render('home/welcome')
}

module.exports.dashboard= async (req,res)=>{
    const adminDashboardViewModel={
        unassignedTickets: await Ticket.find({status:'New'}).populate('project').populate('asignee').exec(),
        unassignedUsers:await User.find({role:'NewUser'})
    }

    const dashboardViewModel={
        unassignedTickets: await Ticket.find({status:'New',asignee: req.user.id}).populate('asignee').populate('project').exec(),
    }

    if(req.user.role == 'Admin' ||req.user.role == 'Admin-Demo' ){
        return res.render('home/adminDashboard',{adminDashboardViewModel})
    }
    return res.render('home/dashboard',{dashboardViewModel})

}

module.exports.integrateJira=async(req,res)=>{
        const authCode=req.query.code;
        fetch('https://auth.atlassian.com/oauth/token', {
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  data:{
        "grant_type": "authorization_code",
        "client_id": process.env.JIRA_CLIENT_ID,
        "client_secret": process.env.JIRA_CLIENT_SECRET,
        "code": authCode,
        "redirect_uri": "https://www.trackii.app/home/dashboard"
  }
})
  .then(response => {
    console.log(
     response
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
  const accessToken=req.body['access_token'];
  const user=await User.findById(req.user._id)
  user.jiraAccessToken=accessToken;
  user.save();
  res.redirect('/home/dashboard');
}

