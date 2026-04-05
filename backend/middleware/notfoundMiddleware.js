const statusCodes = require('http-status-codes')

const notfoundMiddleware = (req,res,next)=>{
    res.status(statusCodes.NOT_FOUND).send('Route not found')
}

module.exports = notfoundMiddleware;