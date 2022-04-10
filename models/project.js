const mongoose=require('mongoose')
const Ticket=require('../models/ticket')
const Schema=mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


const projectSchema=new Schema({
        name: {
                type:String,
                required:true
        },
        description: {
                type:String,
                required:true
        },
        tickets:[{
                type:Schema.Types.ObjectId,
                ref:'Ticket',
        }],
        team:[{
                type: Schema.Types.ObjectId,
                ref:'User'
        }],
        status: {
                type: String,
                default: 'active',
                enum: ["active", "archived"],
            }

},
{
        timestamps: true
        }
)
module.exports= mongoose.models.Project ||mongoose.model('Project',projectSchema);