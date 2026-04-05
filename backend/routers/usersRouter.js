const express = require('express')
const router = express.Router();

//create routers
router.route('user/login').post();
router.route('user/register').post();

module.exports = router;