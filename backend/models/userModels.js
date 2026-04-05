const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'User name must be more than 3 letters'],
        maxLength: [20, 'User name must be less than 20 letters'],
        required: [true, 'Please provide a name!']
    },
    email: {
        type: String,
        required: [true, 'Please procide a Email!'],
        lowercase: true,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please use a valid email address"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [6, 'Password must be more than 3 characters'],
    }
})

// hashing password
UsersSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(this.password, salt)
    this.password = hashPass
})

//create JWT token
UsersSchema.methods.createJWT = function(user){
    return jwt.sign({id: user._id, name: user.name, email: user.email}, process.env.JWT_SECRET, {expiresIn: '7d'})
}

//password deHshing
UsersSchema.methods.dehashPassword = async function(userPassword){
    return await bcrypt.compare(userPassword, this.password)
}

module.exports = mongoose.model('users', UsersSchema)
