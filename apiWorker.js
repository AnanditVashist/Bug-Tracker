const fetch = require('node-fetch');
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
module.exports.sendEmail=(submitter,assignee)=>{
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

module.exports.createNewJiraProject=(project,cloudId,userToken)=>{

const bodyData = `{
  "name": ${project.name},
  "description": ${project.description},
  "leadAccountId": ${process.env.JIRA_ID},
  "key": "EX71412",
}`;

fetch(`https://api.atlassian.com/ex/jira/${cloudID}/{/rest/api/2/project}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
}

module.exports.getCloudId=(accessToken)=>{
  fetch(`https://api.atlassian.com/oauth/token/accessible-resources`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept':'application/json'
  }
})
  .then(response => {
    console.log(response);
    const cloudId=response.find(sites=>{
      return sites.name==='Trackii'
    })
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
  return cloudId;
}