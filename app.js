const methodOverride=require('method-override');
const express= require("express");
const path=require("path");
const mongoose=require('mongoose');
const ejsMate=require('ejs-mate');
const Project=require('./models/project')


const projectsController=require('./controllers/projects')
const ticketsController=require('./controllers/tickets')


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

app.engine('ejs',ejsMate)
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('assets'))

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use('/projects', projectsController)
app.use('/tickets', ticketsController)


app.get('/',(req,res)=>{
    res.send('Connected')
})




app.listen('4000',()=>{
    console.log('Serving on port 4000')
})