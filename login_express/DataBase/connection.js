const mongoose = require('mongoose');
const config = require('../Configurations/config');

// Getting MongoDB Url
const mongoDB = config.mongourl;

// To accept deprecated methods such as findOneAndUpdate
mongoose.set('useFindAndModify', false);

// Connecting to MongoDB using Mongoose
mongoose.connect(mongoDB, { useNewUrlParser : true });

// Get the default connection
const db = mongoose.connection;

db.on('error', ()=>{
    console.error("Error while connectiong to MongoDB");
});

module.exports = mongoose;