const User=require('../models/user')
const env=require("dotenv").config();


module.exports.renderRegisterForm= (req,res)=>{
    res.render('identity/register')
}

    module.exports.postRegisterForm=  async(req,res)=>{
    const firstName=req.body.Input.FirstName;
    const lastName=req.body.Input.LastName;
    const email=req.body.Input.Email;
    const username=req.body.Input.Email;
    const password=req.body.Input.Password;
    const user=new User({email,firstName,lastName,username})
    const registerUser=await User.register(user,password)
    req.login(user,err=>{
        if(err)console.log(err);
        res.redirect('/home/welcome')
    })
}


module.exports.renderLogin= (req,res)=>{
    res.render('identity/login')
}

// 

module.exports.postLogin= (req,res)=>{
            if(req.user.role=='newUser'){
                return res.redirect('/home/welcome')
            }
            else {   res.redirect('/home/dashboard')}
}

module.exports.logoutUser= (req,res)=>{

    req.logout()
    res.redirect('/')
}

module.exports.renderManageForm= (req,res)=>{
    res.render('identity/manage')
}

module.exports.postManageForm= async (req,res)=>{
    const userInDb = await User.findByIdAndUpdate(
        req.user.id,
        {
            firstName: req.body['Input.firstName'],
            lastName: req.body['Input.LastName'],
            image:{
                url: req.file.path,
                filename:req.file.filename
    } })
    await userInDb.save();
    res.redirect('/identity/manage')

}

module.exports.renderChangePassword= (req,res)=>{
    res.render('identity/changePassword')
}

module.exports.postChangePassword= async (req,res)=>{
    const user=await User.findById(req.user.id);
    await user.changePassword(req.body.OldPassword,req.body.NewPassword)
    res.redirect('/identity/changePassword')

}

module.exports.loginDemoUser=async(req,res)=>{

    const demoUser=await User.findOne({email:req.body.demoEmail})
    req.login(demoUser,err=>{
        if(err)console.log(err);
        if(demoUser.role=='NewUser'){
            return res.redirect('/home/welcome')
        }
        req.flash('success','Successfully')
        res.redirect('/home/dashboard')
    })
    
}