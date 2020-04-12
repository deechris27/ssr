const express = require('express');
const authRoutes = require('./routes/auth');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();

app.use('/api', authRoutes);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log("Server is listening to port ", port);
});