const express = require("express");
const routes = express.Router();
const AuthController = require("../controlers/authControler");

routes.post("/login",AuthController.login);
routes.post("/register",AuthController.registerNewUser);
routes.post("/refresh");
routes.post("/forgot");

module.exports = routes;

