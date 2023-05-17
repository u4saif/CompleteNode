const mongoose = require('mongoose');

const connectDb = async ()=> {
   
   try{
       const connectionStatus =  await mongoose.connect(process.env.MONGO_URL);
       console.log("DataBase Connected SuccessFully!!".green , connectionStatus.connection.port)
   }catch{
    console.log("Unable to connect".error);
   }

}

module.exports = connectDb;