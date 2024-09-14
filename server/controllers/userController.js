// login user - only structure for now
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user - only structure for now
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

// This allows us to export the above functions for use
// in other files, particularly in the user.js routes file
module.exports = {signupUser, loginUser}