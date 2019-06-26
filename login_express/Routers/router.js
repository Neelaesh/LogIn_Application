const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');
const token = require('../Authenticators/verifyJWTToken');
const deleteToken = require('../Authenticators/deleteJWTToken');

router.post('/logIn', controller.logIn, (req,res)=>{
    console.log("Found the User Details");
});
router.post('/logOut', token.verifyJWTToken, controller.logOut, deleteToken.deleteJWTToken);
router.get('/', controller.getUsers);
router.post('/signUp', controller.signUp);
router.post('/deleteAccount', controller.deleteUser, deleteToken.deleteJWTToken);

module.exports = router;