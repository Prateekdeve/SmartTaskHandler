const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');
async function connectDB() {
    try{
        //connect to mongodb servwer
        await mongoose.connect(serverConfig.DB_URL);
        console.log('successfully connected to database');
    }catch(error){
        console.log('not able to connect to database', error);
    }
}

module.exports = connectDB;