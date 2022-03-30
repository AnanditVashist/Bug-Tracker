const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
module.exports.roles = (function() {
ac.grant("newUser")
 .readOwn("project")
 .updateOwn("project")
 
ac.grant("developer")
 .extend("newUser")
 .readAny("project")

ac.grant('manager')
    .extend('developer')
    .readAny('project')
 
ac.grant("admin")
 .extend("newUser")
 .extend("developer")
 .updateAny("project")
 .deleteAny("project")
 
return ac;
})();