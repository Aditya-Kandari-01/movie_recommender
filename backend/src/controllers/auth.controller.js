const userModel = require("../models/userModel");
const blackListModel = require("../models/blackListModel");

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/**
 * @route POST /user/auth/register
 * @description user registrations
 * @access public
 */
const registerUserController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please provider username,email and password"
            })
        }

        const isUserAlreadyExist = await userModel.findOne({
            $or: [{ username }, { email }]
        })
        if (isUserAlreadyExist) {
            if (isUserAlreadyExist.username === username) {
                return res.status(400).json({
                    message: "Account already exists with this username"
                })
            }
            if (isUserAlreadyExist.email === email) {
                return res.status(400).json({
                    message: "Account already exists with this email address"
                })
            }

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({ username, email, password: hashPassword })

        return res.status(201).json({
            message: "User created succesfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

/**
 * @route POST /user/auth/login
 * @description user login
 * @access public
 */

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign({
            id: user._id,
            username: user.username,
        }, process.env.SECRET_KEY, { expiresIn: "1d" })

        res.cookie("token", token)
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })

    }

}

/**
 * @route GET /user/auth/logout
 * @description user logout and add the token in blacklist
 * @access public
 */

const logoutUserController = async (req, res) => {
    try {
        const token = req.cookies.token
        if (token) {
            await blackListModel.create({ token })
        }
        res.clearCookie("token")
        res.status(200).json({
            message: "User logged out successfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

/**
 * @route GET /user/auth/get-me
 * @description get the current logged in user details
 * @access private
 */

const getMeController = async (req, res) => {
    const user = await userModel.findById(req.user.id);
    res.status(200).json({
        message: "User details fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports = { registerUserController, loginUserController, logoutUserController, getMeController }