const jwt = require('jsonwebtoken');

const getToken = (userData)=>{
    const payload = userData;
    const secret = process.env.ACCESS_SECRET_KEY;
    const options = { expiresIn: "1h" }
    const token = jwt.sign(payload,secret,options);
    return token;
}

const decriptToken = (token)=>{
    const payload = jwt.decode(token);
    return payload;
}

module.exports = {getToken,decriptToken}