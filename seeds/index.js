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
    await Project.deleteMany({})
    for (let i = 0; i < 50; i++) {
        let project=new Project({
            name: `Example Project ${i}`,
            description: `This is an example project. Here you can have a short description to explain the project.`
        })

        await project.save();
    }
    // for (let i = 1; i < 10; i+=2) {
    //     let ticket=new ticket({
    //         title: `Title ${i}`,
    //         description: `This ticket is really important for the team ${i}`,
    //         priority: ``
    //     })

    //     await project.save();
    // }

}


seedDb()