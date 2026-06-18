const jwt = require('jsonwebtoken')
const blackListModel = require("../models/blackListModel")
const authUser = async(req,res,next) =>{
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({
            message:"Token not provided"
        })
    }
    const isTokenBlackListed = await blackListModel.findOne({
        token
    })
    if (isTokenBlackListed){
        return res.status(401).json({
            message:"Token is invalid"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = decoded;
        next()
    }
    catch(error){
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }
}

module.exports = {authUser};