const express = require('express');
const authRoutes = require('./routes/auth');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({path: 'app.env'});

const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log("DB connected"))
.catch(e=>console.log("error ", e));


app.use(morgan('dev'));
app.use(bodyParser.json());

// let whitelist = ['http://localhost:3000'];

// app.use(cors({origin(origin, callback){
//     if(whitelist.indexOf(origin) !== -1){
//         return callback(null, true);
//     }else{
//         return callback(new Error("Origin rejected!!!"), false);
//     }
// }}));

// app.use('/', (req, res, next)=>{
//     req.setHeader({"Access-Control-Allow-Origin": "*"});
//     next();
// });

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api', authRoutes);


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log("Server is listening to port ", port);
});