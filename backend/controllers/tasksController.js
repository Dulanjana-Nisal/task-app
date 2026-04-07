const BadrequestErrorHaddler = require('../errors/BadrequestErrorHadder');
const NotfoundErrorHaddler = require('../errors/NotfoundErrorHaddler')
const Tasks = require('../models/taskModels');
const asyncErrorHaddler = require('../utils/asyncHaddler')
const statusCodes = require('http-status-codes')

//get all tasks
const getAllTasks = asyncErrorHaddler(async (req, res) => {
    //select user
    const allTasks = await Tasks.find({ createdBy: req.user.id }).sort({createdAt: -1})
    if (!allTasks) {
        throw new BadrequestErrorHaddler('Task Error')
    }
    res.status(statusCodes.OK).send({ success: true, user: { name: req.user.name, email: req.user.email }, data: allTasks, length: allTasks.length })
})

//create tasks
const createTasks = asyncErrorHaddler(async (req, res) => {
    req.body.createdBy = req.user.id;
    if (!req.body.title) {
        throw new BadrequestErrorHaddler('Please Provide a Title for task')
    }
    if (!req.body.description) {
        throw new BadrequestErrorHaddler('Please Provide a description for task')
    }
    const createJob = await Tasks.create(req.body);
    res.status(statusCodes.CREATED).json({ success: true, data: createJob })
})

//get single tasks
const getSingleTasks = asyncErrorHaddler(async (req, res) => {
    const paramId = req.params.id

    // find task
    const singleTask = await Tasks.findOne({ _id: paramId })
    if (!singleTask) {
        throw new NotfoundErrorHaddler('Task is not found')
    }
    res.status(statusCodes.OK).json({ success: true, data: singleTask })
})

//update tasks
const updateTasks = asyncErrorHaddler(async (req, res) => {
    const paramId = req.params.id
    const {title,description} = req.body;

    if(!title || !description){
        throw new BadrequestErrorHaddler('Please Provide values!')
    }
    const update = await Tasks.findOneAndUpdate({_id: paramId},req.body,{new: true, })
    if(!update){
        throw new BadrequestErrorHaddler('Update Error!')
    }
    res.status(statusCodes.OK).send({success: true, data: update})
})

//delete tasks
const deleteTasks = asyncErrorHaddler(async(req, res) => {
    const paramId = req.params.id

    // find task
    const deleteTask = await Tasks.findOneAndDelete({ _id: paramId })
    if (!deleteTask) {
        throw new NotfoundErrorHaddler('Task is not found')
    }
    res.status(statusCodes.OK).json({ success: true, message: `${deleteTask.title} Task is Deleted` })
})

module.exports = {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks
}
