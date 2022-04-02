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
        unique: true
    },
    lastName:{
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'newUser',
        enum: ["admin", "manager","developer","submitter","newUser"],
    },
    accessToke:{
        type: String
    }
})


UserSchema.plugin(passportLocalMongoose,
    { usernameField : 'email'});

module.exports=mongoose.model('User',UserSchema)