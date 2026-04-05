const AuthenticationErrorHadder = require("./AuthenticationErrorHaddler");
const BadrequestErrorHaddler = require("./BadrequestErrorHadder");
const CustomErrorHaddler = require("./CustomErrorHaddler");
const NotfoundErrorHaddler = require("./NotfoundErrorHaddler");

module.exports = {
    CustomErrorHaddler,
    BadrequestErrorHaddler,
    AuthenticationErrorHadder,
    NotfoundErrorHaddler
}