//user register
const userRegisterController = (req,res)=>{
    req.status(200).send('Register users')
}
//login users
const userLoginController = (req,res)=>{
    res.status(200).send('Login users')
}

module.exports = {
    userRegisterController,
    userLoginController
}