const jwt = require('jsonwebtoken');
const key = require('../key');

var createToken = function(email) {
    return jwt.sign({
           email: email
        }, key.tokenKey,
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
  generateToken: function(req, res, next) {
      req.token = createToken(req.body.email);
      return next();
  },
  sendToken: function(req, res, next) {
      console.log("Token ",req.token);
      req.body["token"] = req.token;
      return next();
  }
};