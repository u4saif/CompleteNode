const express = require("express");
const dotenv = require("dotenv");
const colors = require('./utilities/consoleColors');
const dbConnect = require('./config/db');
const users = require("./models/usersModel");
const app = express();
const cluster = require('cluster');
const os = require('os'); 
const numCPUs=os.cpus().length;

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
    delayResponse(2000)
    cluster.worker.kill();
    res.status(200).json(data);
})

if(cluster.isMaster){
    for(let cpu =1 ; cpu <=  numCPUs ; cpu++){
        cluster.fork();
    }
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`Process with PID ${process.pid} died.`.error);
        cluster.fork();
    })
}else {
    app.listen(PORT , ()=>{
        console.log(`🚀🚀App is Running on 🚨PORT:${PORT} with PID ${process.pid}`.info);
    });
}