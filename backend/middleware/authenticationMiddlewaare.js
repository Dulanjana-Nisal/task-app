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
    req.user = {id:user.id, name: user.name, email:user.email}
    next();
}  
module.exports = authenticationMiddleware;