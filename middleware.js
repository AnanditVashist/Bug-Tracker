const {roles} = require('./utilities/roles')

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
 
module.exports.checkForDemoUser = function(action,resource) {
    return async (req, res, next) => {
     try {
      if ((req.user.role.search('Demo')) !== -1) {
          req.flash('info',`Your ${action} ${resource} has been received!`)
       return res.redirect('/projects')
      }
      next()
     } catch (error) {
      next(error)
     }
    }
   }