const BadrequestErrorHaddler = require('../errors/BadrequestErrorHadder');
const Jobs = require('../models/taskModels');
const asyncErrorHaddler = require('../utils/asyncHaddler')
const statusCodes = require('http-status-codes')

//get all tasks
const getAllTasks = (req,res)=>{
    res.status(statusCodes.OK).send('Get all jobs')
}

//create tasks
const createTasks = asyncErrorHaddler(async (req,res)=>{
    req.body.createdBy = req.user.id;
    if(!req.body.title){
        throw new BadrequestErrorHaddler('PLease Provide a Title for job')
    }
    const createJob = await Jobs.create(req.body);
    res.status(statusCodes.OK).json({success: true, data: createJob})
})

//get single tasks
const getSingleTasks = (req,res)=>{
    res.status(statusCodes.OK).send('Get single jobs')
}

//update tasks
const updateTasks = (req,res)=>{
    res.status(statusCodes.OK).send('Update jobs')
}

//delete tasks
const deleteTasks = (req,res)=>{
    res.status(statusCodes.OK).send('Delete jobs')
}

module.exports = {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}
