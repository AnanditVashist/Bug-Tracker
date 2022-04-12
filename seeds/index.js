const mongoose=require('mongoose');
const Project = require('../models/project');
const Ticket = require('../models/ticket');
const User=require('../models/user')



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
            // for(i=0;i<21;i++){
            //     let randomNum=Math.floor(1000 + Math.random() * 9000)
            //     const project=new Project()
            //     project.name=`Example Project ${randomNum}`;
            //     project.description='This is an automatically generated demo project. Here you can have a short description to explain your project.';
            //     project.team.push("6253d57c73d0c123ad18f065","6253d6dd2e8718496c0448e1","6253d7042e8718496c0448e6","6253d7502e8718496c0448ed","6253d77b2e8718496c0448f2","62548c2ed7dc0b83524ffc8a")
            //     project.status='Active';
            //     await project.save()
            // }}
    //     let projects=await Project.find();
    //     for(projectInDb of projects){
    //         for(i=0;i<1;i++){
    //         let ticket=new Ticket({
    //             title:`Random ${Math.floor(10000 + Math.random() * 90000)}: ticket generated automatically.`,
    //             description: `This ticket was automatically generated for demo purposes.`,
    //             type:'UI',
    //             priority:'High',
    //             status:'Resolved',
    //             project: projectInDb._id,
    //             submitter: '6253d57c73d0c123ad18f065',
    //             asignee:'6253d7502e8718496c0448ed',
    //             createdAt: new Date(2022, 3, 11)
    //         });
    //         await ticket.save()
    //     }
    //     }
    // }


// 624a7044b99bf14d17a4adfd
// 624a6faab99bf14d17a4adeb
    // for (let i = 1; i < 10; i+=2) {
    //     let ticket=new ticket({
    //         title: `Title ${i}`,
    //         description: `This ticket is really important for the team ${i}`,
    //         priority: ``
    //     })

    //     await project.save();
    // }



seedDb()