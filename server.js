const express = require("express");
const dotenv = require("dotenv");
const colors = require("./utilities/consoleColors");
const dbConnect = require("./config/db");
const catchError = require("http-errors");
const app = express();
const { Errorhandler } = require("./helpers/errorHelper");
const authRouter = require("./Routes/authRoutes");
const PORT = process.env.PORT || 5000;

//Load local Env
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
dbConnect();

app.use("/auth", authRouter);

app.use(Errorhandler);
app.listen(PORT, () => {
  console.log(
    `🚀🚀App is Running on 🚨PORT:${PORT} with PID ${process.pid}`.info
  );
});
