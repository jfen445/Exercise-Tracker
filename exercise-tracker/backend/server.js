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
connection.once('open', () => {
    console.log("MongoDB database connection established succesesfully");
})

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})