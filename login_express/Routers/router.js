const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');
const verifyToken = require('../Authenticators/verifyJWTToken');
const deleteToken = require('../Authenticators/deleteJWTToken');
const { generateToken, sendToken } = require('../Authenticators/authLoginJWTToken');
//const generateToken = require('../Authenticators/generateJWTToken');

router.post('/logIn', generateToken, sendToken, controller.logIn, (req,res)=>{
    console.log("Found the User Details");
});
router.post('/logOut', verifyToken.verifyJWTToken, controller.logOut, deleteToken.deleteJWTToken);
router.get('/', controller.getUsers);
router.post('/signUp', controller.signUp);
router.post('/delete', controller.deleteUser, deleteToken.deleteJWTToken);
router.post('/googleLogin', controller.googleLogin);
router.post('/facebookLogin', controller.facebookLogin);
router.post('/unLinkGoogle', controller.unLinkGoogle);
router.post('/unLinkFacebook', controller.unLinkFacebook);


module.exports = router;