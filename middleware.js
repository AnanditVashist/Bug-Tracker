module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
     return res.send('You must be signed in')
    }
    next();
}