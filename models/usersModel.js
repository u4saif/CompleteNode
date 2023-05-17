const mongoose = require("mongoose");


const Users = new mongoose.Schema({
    username: {type : String , required: [true, 'please provide username'] , unique : true},
    password: {type : String , required : [true, 'please provide password']}
});

module.exports = mongoose.model('users',Users);