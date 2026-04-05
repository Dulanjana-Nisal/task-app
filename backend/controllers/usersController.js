const Users = require('../models/userModels')
const asyncErrorHaddler = require('../utils/asyncHaddler')
const BadrequestErrorHaddler = require('../errors/BadrequestErrorHadder')
const statusCodes = require('http-status-codes')

//user register
const userRegisterController = asyncErrorHaddler(async (req,res)=>{
    const registerUser = await Users.create(req.body)
    res.status(200).send(registerUser)
})

//login users
const userLoginController = asyncErrorHaddler(async(req,res)=>{
    const userLogin = await Users.findOne({email: req.body.email})
    if(!userLogin){
        throw new BadrequestErrorHaddler('User not registerd!')
    }
    res.status(statusCodes.OK).json({success: true, data: userLogin})
})

module.exports = {
    userRegisterController,
    userLoginController
}