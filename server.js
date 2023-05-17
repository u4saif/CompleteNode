const express = require("express");
const dotenv = require("dotenv");
const colors = require("./utilities/consoleColors");
const dbConnect = require("./config/db");
const users = require("./models/usersModel");
const catchError = require("http-errors");
const app = express();
const {authSchema} = require('./helpers/validationSchema');
const {Errorhandler} = require('./helpers/errorHelper')
const PORT = process.env.PORT || 5000;
//Load local Env
dotenv.config({ path: "./config/config.env" });
//dbConnect();

 app.use(express.json());
 //app.use(express.urlencoded({extended:true}));

app.post("/login",  async(req, res, next) => { 
  //const userData = await users.find();

  try{
      const validInput = await authSchema.validateAsync(req.body);
      console.log(validInput)
      res.status(201).json(validInput);
  }catch (error){
    if(error.isJoi == true) error.status = 422;
    next(error);
  } 
});

app.use(async (req, res, next) => {
    next(createError.NotFound())
  });

app.use(Errorhandler);
app.listen(PORT, () => {
  console.log(
    `🚀🚀App is Running on 🚨PORT:${PORT} with PID ${process.pid}`.info
  );
});
