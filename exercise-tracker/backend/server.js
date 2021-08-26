const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') // help connect to our mongodb database 

//configures so we can have environment vairables in dotenv file
require('dotenv').config();

//creating express server
const app = express();
const port = process.env.PORT || 5000; //port that the server will be on

//middle wear, allow is to pass json to the server
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //datebase uri, get from mongodb dashboard
mongoose.connect(uri, { useNewUrlParser: true }); //start connection with database
mongoose.connect(uri, { CreateIndex: true });
const connection = mongoose.connection; 
//once connection is open
connection.once('open', () => {
    //connected to the database
    console.log("MongoDB database connection established succesesfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//is /exercises is used, everything in the exerciseRouter will be loaded
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})