const express = require("express");
const dotenv = require("dotenv");
const colors = require('./utilities/consoleColors');
const dbConnect = require('./config/db');
const users = require("./models/usersModel");
const app = express();

const PORT = process.env.PORT || 5000;
//Load local Env
dotenv.config({ path: './config/config.env' })
dbConnect(); 

function delayResponse(duration){
    const start = Date.now();
    while(Date.now() - start < duration){}
}
app.get('/', async (req,res)=>{
    data = { username : 'Saif', password : 23};
    //const userData = await users.find();
    delayResponse(5000)
    //console.log(userData);
    res.status(200).json(data);
})


app.listen(PORT , ()=>{
    console.log("🚀🚀App is Running on 🚨PORT:".info,PORT);
})