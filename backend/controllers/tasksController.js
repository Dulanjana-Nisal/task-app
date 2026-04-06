const BadrequestErrorHaddler = require('../errors/BadrequestErrorHadder');
const NotfoundErrorHaddler = require('../errors/NotfoundErrorHaddler')
const Tasks = require('../models/taskModels');
const asyncErrorHaddler = require('../utils/asyncHaddler')
const statusCodes = require('http-status-codes')

//get all tasks
const getAllTasks = asyncErrorHaddler(async(req,res)=>{
    //select user
    const allTasks = await Tasks.find({createdBy: req.user.id})
    if(!allTasks){
        throw new BadrequestErrorHaddler('Task Error')
    }
    res.status(statusCodes.OK).send({success: true,user:{name: req.user.name, email: req.user.email}, data: allTasks, length: allTasks.length})
})

//create tasks
const createTasks = asyncErrorHaddler(async (req,res)=>{
    req.body.createdBy = req.user.id;
    if(!req.body.title){
        throw new BadrequestErrorHaddler('PLease Provide a Title for job')
    }
    if(!req.body.description){
        throw new BadrequestErrorHaddler('PLease Provide a description for job')
    }
    const createJob = await Tasks.create(req.body);
    res.status(statusCodes.CREATED).json({success: true, data: createJob})
})

//get single tasks
const getSingleTasks = asyncErrorHaddler(async(req,res)=>{
    const paramId = req.params.id
    // find task
    console.log(req.user.id)
    const singleTask = await Tasks.findOne({_id: paramId})
    if(!singleTask){
        throw new NotfoundErrorHaddler('Task is not found')
    }
    res.status(statusCodes.OK).json({success: true, data: singleTask})
})

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
