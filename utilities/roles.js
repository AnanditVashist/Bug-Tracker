const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
module.exports.roles = (function() {
ac.grant("newUser")
    .readOwn('project')
    .readOwn('ticket')
 
ac.grant("submitter")
 .readOwn("project")
 .readOwn('ticket')
 .createAny('ticket')
 .readOwn('ticket')
 .updateOwn('ticket')

ac.grant('developer')
    .extend('submitter')
 
ac.grant("manager")
 .createAny("project")
 .readAny('project')
 .updateOwn('project')
 .deleteOwn('project')
 .createAny('ticket')
 .readAny('ticket')
 .updateAny('ticket')
 .deleteAny("ticket")
 
 ac.grant('admin')
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