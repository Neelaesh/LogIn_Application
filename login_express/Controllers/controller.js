const jwt = require('jsonwebtoken');
const User = require('../Schema/userSchema');
const key = require('../key');
const bcrypt = require('bcryptjs');
const config = require('../Configurations/config');

module.exports.logIn = (req,res,next) => {
    
    console.log("Log In ",req.body);
    User.find({ "email" : req.body.email, 'status': 'active' }).then((user)=>{
        console.log("User ",user);
        if(user.length != 0){  
            console.log("Password Matching ",bcrypt.compareSync(req.body.password, user[0].password));
            if(bcrypt.compareSync(req.body.password, user[0].password)){
                let token = jwt.sign({username: user[0].username}, key.tokenKey);
                res.status(200).json({
                    email : user[0].email,
                    username : user[0].username,
                    userid : user[0].userid,
                    firstname : user[0].firstname,
                    lastname : user[0].lastname,
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
    User.find({ 'email' : req.body.email, 'status': 'active' }).then((userEmailDetails) => {
        if(userEmailDetails.length != 0){
            if(userEmailDetails[0].email === req.body.email){
                res.status(400).send({ message:"Email Address Already Registered", status : 400 });
            }
        }
        else{
            User.find({ 'username' : req.body.username, 'status': 'active' }).then((usernameDetails) => {
                if(usernameDetails != 0){
                    if(usernameDetails[0].username === req.body.username){
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

module.exports.deleteUser = (req, res) => {

    console.log("Delete User ",req.body);
    let searchEmail = { email : req.body.email };
    User.findOneAndUpdate(searchEmail, { 'status': 'inactive' }, { upsert : true }, (err, data) => {
        if(err)
            res.status(400).send({ message: err, status : 400 });
        else{
            console.log("Deleted User ",data);
            res.status(200).json({ message: 'User Deleted', status : 200 });
        }
    });
}