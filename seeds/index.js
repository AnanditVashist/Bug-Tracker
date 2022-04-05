// import {typeStrings,priorityStrings,statusStrings} from '../utilities/ticketUtility'
const mongoose=require('mongoose');
const Project = require('../models/project');
const Ticket = require('../models/ticket');



mongoose.connect('mongodb://localhost:27017/trackii',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error",console.error.bind(console,'connection error:'));
db.once("open",()=>{
    console.log("DB Connected");
});

const seedDb=async()=>{
        let projects=await Project.find();
        for(project of projects){
            let ticket=new Ticket({
                title:`Random ${Math.floor(1000 + Math.random() * 9000)}: ticket generated automatically.`,
                description: `This ticket was generated for demo purposes ${Math.floor(1000 + Math.random() * 9000)} uniquely identifies this ticket.`,
                type:'UI',
                priority:'Pending',
                status:'New',
                project: project._id,
                submitter: '624a6ff5b99bf14d17a4adf1',
                asignee:'624a7018b99bf14d17a4adf7',
            });

            await ticket.save()
        }
       

}
    // for (let i = 1; i < 10; i+=2) {
    //     let ticket=new ticket({
    //         title: `Title ${i}`,
    //         description: `This ticket is really important for the team ${i}`,
    //         priority: ``
    //     })

    //     await project.save();
    // }



seedDb()