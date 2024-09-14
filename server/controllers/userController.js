const User = require('../models/userModel')
// we use this to interact with our users collections in our database

// login user - only structure for now
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user 
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        res.status(200).json({email, user}) // if theres is no error, User.signup returns a user object created in mongoDB
    } catch (error) {
        res.status(400).json({error: error.mssg})

    }

    // res.json({mssg: 'signup user'}) // this was here when I wanted to test API requests using Postman
}

// This allows us to export the above functions for use
// in other files, particularly in the user.js routes file
module.exports = {signupUser, loginUser}