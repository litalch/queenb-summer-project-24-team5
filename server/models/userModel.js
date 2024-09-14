const mongoose = require('mongoose') // database - MongoDB
const bcrypt = require('bcrypt') // will be used to hash passwords (to not save them as is in the database) 
const validator = require('validator') // will be used to verify that the user input for email,password is valid

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


// static signup method
userSchema.statics.signup = async function(email, password){

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('An account with this email address aleady exists. Please sign up with a different email address, or log in.')
    }

    const salt = await bcrypt.genSalt(10) // creates salt, adding another layer of protection (makes it harder for hackers to do password-matching)
    const hash = await bcrypt.hash(password, salt) // hashes the password the user created

    const user = await this.create({ email, password:hash })

    return user
}



module.exports = mongoose.model('User', userSchema)
// now mongoose won't allow us to save users to the database, unless they adhere to the Schema defined above
