const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/**
 * @route POST /user/auth/register
 * @description user registrations
 * @access public
 */
const registerUserController = async(req,res) =>{
    const {username,email,password} = req.body;

    if (!username || !email || !password){
        return res.status(400).json({
            message:"Please provider username,email and password"
        })
    }

    const isUserAlreadyExist = await userModel.findOne({
        $or : [{username},{email}]
    })

    if (isUserAlreadyExist.username === username){
        return res.status(400).json({
            message:"Account already exists with this username"
        })
    }
    if (isUserAlreadyExist.email === email){
        return res.status(400).json({
            message:"Account already exists with this email address"
        })
    }
    
    const hashPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({username,email,password:hashPassword})

    const token = jwt.sign({
        id:user._id,
        username:user.username,
    },process.env.SECRET_KEY,{expiresIn:"1d"})

    res.cookie('token',token);

    return res.status(201).json({
        message:"User created succesfully"
    })
} 

/**
 * @route POST /user/auth/login
 * @description user login
 * @access public
 */





module.exports = {registerUserController}