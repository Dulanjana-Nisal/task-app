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
    const {email,password} = req.body
    const userLogin = await Users.findOne({email: email})

    //check email and password
    if(!email || !password){
        throw new BadrequestErrorHaddler('Please provide email and password!')
    }

    // check email is in db
    if(!userLogin){
        throw new BadrequestErrorHaddler('User not registerd!')
    }

    //check password
    if(!(await userLogin.dehashPassword(password))){
        throw new BadrequestErrorHaddler('Password incorrect!')
    }

    //userlogin
    const token = await userLogin.createJWT(userLogin)
    res.status(statusCodes.OK).json({success: true, data: userLogin, token: token})
})

module.exports = {
    userRegisterController,
    userLoginController
}