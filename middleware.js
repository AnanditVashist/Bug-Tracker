const {roles} = require('./utilities/roles')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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

module.exports. sendEmail=(submitter,assignee)=>{
    const msgAssignee = {
        to: assignee.email,
        from: 'support@trackii.app', 
        subject: `${submitter.firstName} has assigned you a new ticket`,
        html: `<p>Hi ${assignee.firstName},</p>
                <br/>
                <p>${submitter.firstName} has assigned you a new ticket. 
                Please login to your trackii account to view the details.</p>
                <br/>
                <p>Thanks,<br/>Trackii Support Team</p>
                `,
      }
      sgMail
        .send(msgAssignee)
        .then(() => {
          console.log('Email sent');
          const msgSubmitter={
            to: submitter.email,
            from: 'support@trackii.app', 
            subject: `${assignee.firstName} has been succesfully notified!`,
            html: `<p>Hi ${assignee.firstName},</p>
            <br/>
            <p>${submitter.firstName} has been succesfully notified about the latest ticket assignment. 
            <br/>
            <p>Thanks,<br/>Trackii Support Team</p>
            `,
          }
          sgMail
                .send(msgSubmitter)
                .then(()=>{
                    console.log('Email Sent!')
                })
                .catch((error) => {
                    console.error(error)
                  })
        })
        .catch((error) => {
          console.error(error)
        })

}