const { roles } = require('../Trackii/utilities/roles')

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
         
     return res.redirect('/identity/login')
    }
    next();
}

 
module.exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.user.role)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}
 
module.exports.checkForNewUsers=(req,res,next)=>{
    
    if(req.user != null && req.user.role=='newUser'){
       return res.redirect('/home/welcome')
    }
    next();
}