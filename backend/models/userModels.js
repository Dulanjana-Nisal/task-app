const mongoose = require('mongoose');

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

module.exports = mongoose.model('users', UsersSchema)