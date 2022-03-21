const methodOverride=require('method-override');
const express= require("express");
const path=require("path");
const mongoose=require('mongoose');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const ejsMate=require('ejs-mate');
const Project=require('./models/project')
const session=require('express-session')
const User=require('./models/user')

const projectsController=require('./controllers/projects')
const ticketsController=require('./controllers/tickets')
const usersController=require('./controllers/users')

mongoose.connect('mongodb://localhost:27017/trackii',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const db = mongoose.connection;
db.on("error",console.error.bind(console,'connection error:'));
db.once("open",()=>{
    console.log("DB Connected");
});

const app=express()
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

const sessionConfig={
    secret:'thisShouldBeABetterSecret',
    resave:false,
    saveUnitialized:true,
    cooke:{
        httpOnly: true,
        expires: Date.now()+1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}
app.engine('ejs',ejsMate)
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('assets'))
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/projects', projectsController)
app.use('/tickets', ticketsController)
app.use('/', usersController)

app.listen('4000',()=>{
    console.log('Serving on port 4000')
})

app.get('/',(req,res)=>{
    res.send('Connected')
})



module.exports = app;