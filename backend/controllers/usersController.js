const Users = require('../models/userModels')
const asyncErrorHaddler = require('../utils/asyncHaddler')

//user register
const userRegisterController = asyncErrorHaddler(async (req,res)=>{
    const registerUser = await Users.create(req.body)
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