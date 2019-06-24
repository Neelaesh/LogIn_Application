const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');

router.post('/logIn', controller.logIn, (req,res)=>{
    console.log("Found the User Details");
});

router.get('/', controller.getUsers);
router.post('/signUp', controller.signUp);
router.post('/deleteUser', controller.deleteUser);

module.exports = router;