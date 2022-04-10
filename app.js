const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const moment=require('moment')
const {isLoggedIn}=require("./middleware")
const {checkForNewUsers}=require("./middleware")
const multer = require('multer');


mongoose.connect('mongodb://localhost:27017/trackii',{
    useNewUrlParser: true,	
    useUnifiedTopology: true,	
})


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app=express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('assets'))

//app.use(express.static(path.join(__dirname, 'public')))



const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.moment=moment;
    res.locals.userRolesArray=["admin", "manager","developer","submitter","newUser"],
    next();
})




const projectsController=require('./routes/projects')
const ticketsController=require('./routes/tickets')
const identityController=require('./routes/identity')
const homeController=require('./routes/home')
const userRolesController=require('./routes/userRoles')


app.get('/',(req,res)=>{
    res.render('landingPage')
})



app.use('/projects',isLoggedIn, projectsController)
app.use('/tickets',isLoggedIn ,ticketsController)
app.use('/identity', identityController)
app.use('/home',isLoggedIn ,homeController)
app.use('/userRoles',isLoggedIn ,userRolesController)




app.listen('4000',()=>{
    console.log('Serving on port 4000')
})







module.exports = app;