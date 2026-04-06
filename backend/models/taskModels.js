const mongoose = require('mongoose');

const TasksSchema = mongoose.Schema({
    title: {
        type: String,
        minLength: [3, 'Title must be more than 3 letters'],
        trim: true,
        maxLength: [20, 'Title name must be less than 20 letters'],
        required: [true, 'Please provide a Title for job!']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for your task!'],
        maxLength: [100, 'Description name must be less than 100 letters'],
        minLength: [3, 'Description must be more than 3 letters'],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
}, {timestamps: true})

module.exports = mongoose.model('tasks', TasksSchema)