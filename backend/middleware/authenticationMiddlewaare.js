const AuthenticationErrorHaddler = require('../errors/AuthenticationErrorHaddler');
const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req,res,next)=>{
    const authValue = req.headers.authorization;

    //check header token
    if(!authValue || !authValue.startsWith('Bearer ')){
        throw new AuthenticationErrorHaddler('Token is Missing!')
    }
    const token = authValue.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    //check validation of token
    if(!user){
        throw new AuthenticationErrorHaddler('User Authentication Error!')
    }

    //create user
    req.user = {id:'69d2d15cdf2a57366c078909', name:'user 2', email:'user2@gmail.com',}
    next();
}  
module.exports = authenticationMiddleware;