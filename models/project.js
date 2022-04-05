const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Schema=mongoose.Schema;

const ProjectSchema=new Schema({
        name: String,
        description: String,
        tickets:[{
                type:Schema.Types.ObjectId,
                ref:'Ticket'
        }],
        team:[{
                type: Schema.Types.ObjectId,
                ref:'User'
        }],

},
{
        timestamps: true
        }
)

module.exports= mongoose.models.Project ||mongoose.model('Project',ProjectSchema);