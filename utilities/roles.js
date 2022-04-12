const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
module.exports.roles = (function() {
ac.grant(["NewUser",'NewUser-Demo'])
    .readOwn('project')
    .readOwn('ticket')
 
ac.grant(["Submitter",'Submitter-Demo'])
 .readOwn("project")
 .readOwn('ticket')
 .createAny('ticket')
 .readOwn('ticket')
 .updateOwn('ticket')

ac.grant(['Developer','Developer-Demo'])
    .extend('Submitter')
 
ac.grant(["Manager",'Manager-Demo'])
 .createAny("project")
 .readAny('project')
 .updateOwn('project')
 .deleteOwn('project')
 .createAny('ticket')
 .readAny('ticket')
 .updateAny('ticket')
 .deleteAny("ticket")
 
 ac.grant(['Admin','Admin-Demo'])
    .createAny('project')
    .updateAny('project')
    .readAny('project')
    .deleteAny('project')
    .createAny('ticket')
    .updateAny('ticket')
    .readAny('ticket')
    .deleteAny('ticket')
    .createAny('user')
    .updateAny('user')
    .readAny('user')
    .deleteAny('user')
return ac;
})();