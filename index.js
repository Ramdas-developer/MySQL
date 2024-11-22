const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");

require('./models');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5001

app.use(express.json())
app.use(bodyParser.json());

app.use('/user',userRoute)
app.get('/',function(req,res){
    res.send('hello world')
})
app.listen(port, ()=>{
    console.log(`App is run on ${port} PORT.`)
})












// const User = require('./models/user');
// const Contact = require("./models/contact");
// User.sync()
// User.sync({force : true})
// Contact.sync({force:true})
// User.sync({alter:true})
// User.drop();      //using for deleting if table have exist