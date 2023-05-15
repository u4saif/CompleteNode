const express = require("express");
const colors = require('./utilities/consoleColors');
const app = express();

const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    // res.send("Hello Saif");
    data = { name : 'Saif',age : 23};
    res.status(200).json(data);
})


app.listen(PORT , ()=>{
    console.log("App is Running on PORT:".info,PORT);
})