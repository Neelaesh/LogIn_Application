const mongoose = require('mongoose');
const config = require('../Configurations/config');

// Getting MongoDB Url
const mongoDB = config.mongourl;

// Connecting to MongoDB using Mongoose
mongoose.connect(mongoDB, { useNewUrlParser : true });

// Get the default connection
const db = mongoose.connection;

db.on('error', ()=>{
    console.error("Error while connectiong to MongoDB");
});

module.exports = mongoose;