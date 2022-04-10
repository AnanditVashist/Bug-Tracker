const Project=require('../models/project')
const Ticket=require('../models/ticket')
const User=require('../models/user')

module.exports.renderProjectsDashboard =async (req,res)=>{
        const projects= await Project.find().populate({path:'team'})
        res.render('projects',{projects})
}

module.exports.renderCreate=(req,res)=>{
  
    res.render('projects/create')
}

module.exports.postCreate=async (req,res)=>{
    
    const project=new Project()
    project.name= req.body['name'];
    project.description= req.body['description'];
    project.team.push(req.user.id)
    await project.save();
    res.redirect('/projects')

}


module.exports.renderDetails= async (req,res)=>{
    const projectDetailsViewModel={
        project:await Project.findById(req.params.id).populate({path:'team'}),
        tickets: await Ticket.find({project:req.params.id}).populate({path:'asignee'})
    }
    res.render('projects/details',{projectDetailsViewModel})

}

module.exports.renderEdit =async (req,res)=>{
    const project=await Project.findById(req.params.id)
    res.render('projects/edit',{project})
}

module.exports.postEdit= async (req,res)=>{
    const {id}=req.params;
    const project=await Project.findByIdAndUpdate(id,{...req.body.project})
    res.redirect('/projects')
}

module.exports.deleteProject=async (req,res)=>{
    const {id}=req.params;
    const project=await Project.deleteOne({_id:id})
    res.redirect('/projects')
}


module.exports.renderAssignUsers= async(req,res)=>{
    const assignUsersViewModel={};
    assignUsersViewModel.Project= await Project.findById(req.params.id)
    assignUsersViewModel.Users= await User.find()
    res.render('projects/assignUsers',{assignUsersViewModel})
}

module.exports.postAssignUsers=async(req,res)=>{
    const projectInDb=await Project.findById(req.params.id)
    await projectInDb.set({team: req.body.InProject})
    await projectInDb.save();
    res.redirect(`/projects/AssignUsers/${req.params.id}`)

}

module.exports.renderArchiveProject=async(req,res)=>{
    const projects=await Project.find({status:'Archived'}).exec()
    
    res.render('projects/index',{projects})
}

module.exports.postArchiveProject=async(req,res)=>{
    await Project.findByIdAndUpdate(req.params.id,{status:'archived'})
    res.redirect(`/projects/details/${req.params.id}`)
}

