const statusCodes = require('http-status-codes')

//get all jobs
const getAllJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Get all jobs')
}

//create jobs
const createJobs = (req,res)=>{
    res.status(statusCodes.OK).send('Create jobs')
}

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
