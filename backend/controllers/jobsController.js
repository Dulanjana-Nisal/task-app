const Jobs = require('../models/jobModels');
const asyncErrorHaddler = require('../utils/asyncHaddler')
const statusCodes = require('http-status-codes')

//get all jobs
const getAllJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Get all jobs')
}

//create jobs
const createJobs = asyncErrorHaddler(async (req,res)=>{
    const {title, description} = req.body;
    // req.body.createdBy = req.user.id
    console.log(req.user.id)
    const createJob = await Jobs.create({title: title, description: description})
    res.status(statusCodes.OK).json({success: true, data: createJob})
})

//get single jobs
const getSingleJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Get single jobs')
}

//update jobs
const updateJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Update jobs')
}

//delete jobs
const deleteJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Delete jobs')
}

module.exports = {
    getAllJobs,
    createJobs,
    getSingleJobs,
    updateJobs,
    deleteJobs
}
