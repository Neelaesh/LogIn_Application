const jwt = require('jsonwebtoken');
const User = require('../Schema/userSchema');
const key = require('../key');
const bcrypt = require('bcryptjs');
const config = require('../Configurations/config');

module.exports.logIn = (req,res,next) => {
    
    console.log("Log In ",req.body);
    User.findOne({"email" : req.body.email}).then((user)=>{
        console.log("User ",user);
        if(user !== null){  
            console.log("Password Matching ",bcrypt.compareSync(req.body.password, user.password));
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign({username: user.username}, key.tokenKey);
                res.status(200).json({
                    email : user.email,
                    username : user.username,
                    userid : user.userid,
                    firstname : user.firstname,
                    lastname : user.lastname,
                    token
                });
                next();
            }
            else{
                console.log("Invalid Password");
                res.status(400).send({ message:"Invalid Password", status : 400 });
            }
        }
        else{
            res.status(400).send({ message:"Email Address Not Registered", status : 400 });
        }
    }).catch((err)=>{
        console.log("Error ",err);
        res.status(400).send({ message: err, status : 400 });
    });
}

module.exports.getUsers = (req, res) => {
    
    User.find({'status': 'active'}, (err, users)=> {
        console.log("Users ",users);
        res.send(users);
    });
}

module.exports.signUp = (req, res) => {

    console.log("Sign Up ",req.body);
    User.findOne({ 'email' : req.body.email }).then((userEmailDetails) => {
        if(userEmailDetails){
            if(userEmailDetails.email === req.body.email){
                res.status(400).send({ message:"Email Address Already Registered", status : 400 });
            }
        }
        else{
            User.findOne({ 'username' : req.body.username }).then((usernameDetails) => {
                if(usernameDetails){
                    if(usernameDetails.username === req.body.username){
                        res.status(400).send({ message:"Username Already Taken", status : 400 });
                    }
                }
                else{
                    let hash =  bcrypt.hashSync(req.body.password, config.salt);
                    console.log("Hashed Password ",hash);
                    let user = new User({   email : req.body.email, 
                                            username : req.body.username, 
                                            password : hash,  
                                            firstname : req.body.firstname,
                                            lastname : req.body.lastname,
                                            status : 'active'
                    });
                    user.save((err) => {
                        if(err){
                            console.log("Error while Saving User ",err);
                            res.status(400).send({ message:"Error while Creating User", status : 400 });
                        }
                        else
                            res.status(200).send({ message:"User Created Successfully", status : 200 });
                    });
                }
            }).catch((err)=>{
                console.log("Error ",err);
                res.status(400).send({ message: err, status : 400 });
            });
        }
    }).catch((err) => {
        console.log("Error ",err);
        res.status(400).send({ message: err, status : 400 });
    }); 
    
    // Model Object can also be created as
    /* User.create({   email : req.body.email, 
                    username : req.body.username, 
                    password : hash,  
                    firstname : req.body.firstname,
                    lastname : req.body.lastname,
                    status : 'active'

    }, (err, sucess) => {
        if(err)
            console.log("Error while creating Model ",err);
        else  
            console.log("Success creating Model Object ",sucess);
    }); */

}