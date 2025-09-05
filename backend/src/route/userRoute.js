const express = require('express');
const { signUpUser } = require('../controller/userController');
const userRoute = express.Router();

userRoute.post('/', signUpUser);

module.exports = {
    userRoute
};