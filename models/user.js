const mongoose=require('mongoose')
const passportLocalMongoose=require('passpor-local-mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }
})


UserSchema.plugin(passportLocalMongoose)

module.exports=mongoose.model('User',UserSchema)