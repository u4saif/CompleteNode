const bcrypt = require("bcryptjs");
const users = require("../models/usersModel");
const { getToken, decriptToken } = require("../helpers/jwtAuthToken");
const { authSchema } = require("../helpers/validationSchema");

const login = async (req, res, next) => {
  try {
    const getuser = await users.findOne({ username: req.body.username });
      const compare = getuser && bcrypt.compareSync(req.body.password, getuser.password) || false ;
      if (compare) {
        const token = "Bearer " + getToken({ username: req.body.username });
        res.status(200).json({ Token: token });
      } else {
        res.status(403).json({ message: "Invalid username/password." });
      }
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

const registerNewUser = async (req, res, next) => {
  try {
    const validInput = await authSchema.validateAsync(req.body);
    const userData = await users(req.body);
    const result = await userData.save();
    const token = "Bearer " + getToken({ username: req.body.username });
    res.status(201).json({ token });
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};
module.exports = {
  login,
  registerNewUser,
};
