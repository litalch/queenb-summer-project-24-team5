const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true, // makes sure that no one can create an account without an email address 
        unique: true // makes sure that no one can create more than one account assigned to the same email address 
    },
    password: {
        type: String,
        required: true 
        // doesn't have to be unique - different users can have the same password
    }
})

module.exports = mongoose.model('User', userSchema)
// now mongoose won't allow us to save users to the database, unless they adhere to the Schema defined above
