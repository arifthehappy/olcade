const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const contactus = require('./routes/contactus');

const app = express();

//database connection
mongoose.connect(
    process.env.MONGO_URL,{
        useNewUrlParser:true
    },
).then((result)=>{
    app.listen(PORT, ()=>{
        console.log('server is connected successfully')
    })
}).catch((err)=> console.log(err));

app.use(express.json());
// app.use(helmet());
app.use(morgan("common"));


app.use("/api/contactus", contactus)

app.get('/',(req,res)=>{
    res.send('home')
});
