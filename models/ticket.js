const mongoose=require('mongoose')
const Projet=require('../models/project')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ticketSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
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
        ref:'Project',
        required: true
    },
    submitter:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    asignee:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments: String,

    },
        {
    timestamps: true
    }
)

//a unique identifier for tickets wwhich can be displayed to user
ticketSchema.plugin(AutoIncrement,{inc_field: 'uId'})
module.exports=mongoose.model('Ticket',ticketSchema)