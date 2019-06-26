const User = require('../Schema/userSchema');

module.exports.deleteJWTToken = (req, res) => {
    let user = {
        token : ''
    }
    User.update({ 'email' : req.body.email }, user, function(err, data) {
        if(err) {
            res.status(400).send({ message : err, status : 400 });
        }
        else{
            console.log("User Logged Out ",data);
            res.status(200).send({ message: 'User Logged Out', status : 200 });
        }
    });
}