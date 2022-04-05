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
    role: {
        type: String,
        default: 'newUser',
        enum: ["admin", "manager","developer","submitter","newUser"],
    }
})


UserSchema.plugin(passportLocalMongoose);

module.exports= mongoose.models.User ||mongoose.model('User',UserSchema)