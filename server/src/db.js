const mongoose = require('mongoose');
const{ MONGO_URL}= require('./config');

const connect = async()=> {
    try{

    await mongoose.connect(MONGO_URL);
    console.log("Mongoose connected");
    }
    catch (e) {
        console.log(`Couldn't connect. error: ${e}`);

    }
}

module.exports = {
    connect
}