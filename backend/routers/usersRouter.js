const express = require('express');
const { userLoginController, userRegisterController } = require('../controllers/usersController');
const router = express.Router();

//create routers
router.route('/user/login').post(userLoginController);
router.route('/user/register').post(userRegisterController);

module.exports = router;