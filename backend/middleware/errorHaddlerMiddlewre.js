const statusCodes = require('http-status-codes')

const errorHaddlerMiddleware = (err,req,res,next)=>{
    let allErrors = {
        message: err.message || 'Server error please try again later!',
        status: err.status || statusCodes.INTERNAL_SERVER_ERROR,
        code: err.code || 'INTERNAL_SERVER_ERROR'
    }
    if(err.code === 11000){
        allErrors.message = 'Email is already exist!',
        allErrors.status = statusCodes.BAD_REQUEST,
       allErrors.code = 'BAD_REQUEST'
    }
    res.status(allErrors.status).json({success: false, message: allErrors.message, code: allErrors.code})
}
module.exports = errorHaddlerMiddleware;