const express = require('express');
const { route } = require('../app');
const { registerUserController } = require("../controllers/auth.controller")

const authRouter = express.Router();

/**
 * @route POST /api/user/register
 * @description new user registration
 * @access Public 
*/

authRouter.post("/register",registerUserController)


module.exports = authRouter;