const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({

    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true,
        unique: false
    },
    lastName:{
        type: String,
        required: true,
        unique: false
    },
    jiraAccessToken:{
        type: String
    },
    role: {
        type: String,
        default: 'NewUser',
        enum: ["Admin", "Manager","Developer","Submitter","NewUser",
                'Admin-Demo','Manager-Demo','Developer-Demo','Submitter-Demo'],
        required:true
    },
    image:
    {
            url: String,
            filename: String
    }},
    {
        timestamps: true
        }
)


UserSchema.plugin(passportLocalMongoose);

module.exports= mongoose.models.User ||mongoose.model('User',UserSchema)