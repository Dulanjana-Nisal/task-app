const Users = require('../models/userModels')
const asyncErrorHaddler = require('../utils/asyncHaddler')
const BadrequestErrorHaddler = require('../errors/BadrequestErrorHadder')

//user register
const userRegisterController = asyncErrorHaddler(async (req,res)=>{
    const registerUser = await Users.create(req.body)
    if(!registerUser){
         throw BadrequestErrorHaddler('Error')
    }
    res.status(200).send(registerUser)
})

//login users
const userLoginController = (req,res)=>{
    res.status(200).send('Login users')
}

module.exports = {
    userRegisterController,
    userLoginController
}