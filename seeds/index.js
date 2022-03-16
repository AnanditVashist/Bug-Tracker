const mongoose=require('mongoose');
const Project = require('../models/project');


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
    for (let i = 0; i < 50; i++) {
        let project=new Project({
            name: `Project ${i}`,
            description: `This project is really important for the team ${i}`
        })

        await project.save();
    }
}

seedDb()