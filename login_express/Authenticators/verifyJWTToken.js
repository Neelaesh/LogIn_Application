const jwt = require('jsonwebtoken');
const key = require('../key');
const User = require('../Schema/userSchema');

module.exports.verifyJWTToken = (req,res,next) => {

    console.log("JWT Token ",req.headers.authorization);
    console.log("User Email ",req.body.email);
    if(req.headers.authorization){
        console.log("Token Key ",key.tokenKey);
        try{
            //console.log("Verify Token ",jwt.verify(req.headers.authorization, key.tokenKey));
            if(jwt.verify(req.headers.authorization, key.tokenKey)){
                console.log("Authorised User");
                next();
            }
        }
        catch(e){
            console.log("Verify Token Middleware ",e.message);
            res.status(401).send({  message: 'Unauthorised User', status: 401 });
        }
    }
    else{
        console.log("No Headers Set");
        res.status(400).send({  message: 'No Headers Set', status: 400 });
    }
}