const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../Configurations/config');

const userSchema = mongoose.Schema({
    email : {
        type : String,
        trim : true
    },
    username : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        trim : true,
    },
    firstname : {
        type : String,
        trim : true,
    },
    lastname : {
        type : String,
        trim : true,
    },
    phonenumber : {
        type : Number,
        trim : true,
    },
    status : {
        type : String,
        default : 'active'
    },
    googleAccountLinked : {
        type : Boolean,
        default: false
    },
    facebookAccountLinked : {
        type : Boolean,
        default: false
    },
    updatedDate : {
        type : Date,
        default : Date.now()
    }
});

const Users = mongoose.model(config.tableName, userSchema);

module.exports = Users;