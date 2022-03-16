const mongoose=require('mongoose')

const ticketSchema=new mongoose.Schema({
    title:String,
    description: String,
    type:{
        type: String,
        enum:['UI','Bckend','Runtime','Other'],
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

})

module.exports=mongoose.model('Ticket',ticketSchema)