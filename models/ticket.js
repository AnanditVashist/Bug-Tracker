const mongoose=require('mongoose')
const Projet=require('../models/project')

const ticketSchema=new mongoose.Schema({
    title:String,
    description: String,
    type:{
        type: String,
        enum:['UI','Backend','Runtime','Other'],
        required: true
    },
    priority:{
        type: String,
        enum:['Pending','Low','Moderate','High','Urgent'],
        required: true
    },
    status:{
        type: String,
        enum:['New','Reviewed','In Progress','Resolved'],
        required: true
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Project'
    }

})

module.exports=mongoose.model('Ticket',ticketSchema)