const CustomErrorHaddler = require("./CustomErrorHaddler");
const statusCodes = require('http-status-codes')

class AuthenticationErrorHadder extends CustomErrorHaddler{
    constructor(message){
        super(message)
        this.status = statusCodes.UNAUTHORIZED
        this.code = 'UNAUTHORIZED'
    }
}

module.exports = AuthenticationErrorHadder;