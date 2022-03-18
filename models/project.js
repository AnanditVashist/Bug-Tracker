const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Schema=mongoose.Schema;

const ProjectSchema=new Schema({
        name: String,
        description: String,
        tickets:[{
                type:Schema.Types.ObjectId,
                ref:'Ticket'
        }]
})

module.exports= mongoose.models.Project ||mongoose.model('Project',ProjectSchema);