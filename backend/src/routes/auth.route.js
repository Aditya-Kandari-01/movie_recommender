const express = require('express');
const { route } = require('../app');
const { registerUserController,loginUserController,logoutUserController,getMeController } = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const authRouter = express.Router();

/**
 * @route POST /api/user/register
 * @description new user registration
 * @access public 
*/

authRouter.post("/register",registerUserController)

/**
 * @route POST /api/user/login 
 * @description login user with email and password
 * @access public
 */

authRouter.post("/login",loginUserController);

/**
 * @route get /api/user/logout
 * @description logout user by clearing the token from cookie and adding it into black list
 * @access public
 */

authRouter.get("/logout",logoutUserController)

/**
 * @route get /user/auth/get-me
 * @description get the current logged in user details
 * @access private
 */

authRouter.get("/get-me",authMiddleware.authUser,getMeController)

module.exports = authRouter;