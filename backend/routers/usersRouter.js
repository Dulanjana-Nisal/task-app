const express = require('express');
const { userLoginController, userRegisterController } = require('../controllers/usersController');
const router = express.Router();

//create routers
router.route('/login').post(userLoginController);
router.route('/register').post(userRegisterController);

module.exports = router;