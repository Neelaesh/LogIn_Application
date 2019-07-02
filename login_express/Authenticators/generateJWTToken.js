const jwt = require('jsonwebtoken');
const key = require('../key');

module.exports.generateJWTToken = (email) => {
    return jwtToken = jwt.sign({ email: email }, key.tokenKey);
}