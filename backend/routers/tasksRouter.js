const express = require('express');
const { getAllTasks, createTasks, getSingleTasks, updateTasks, deleteTasks } = require('../controllers/tasksController');
const authenticationMiddleware = require('../middleware/AuthenticationMiddlewaare');
const router = express.Router();

//create routers
router.route('').get(authenticationMiddleware, getAllTasks).post(authenticationMiddleware, createTasks);
router.route('/:id').get(authenticationMiddleware, getSingleTasks).patch(authenticationMiddleware, updateTasks).delete(authenticationMiddleware, deleteTasks);

module.exports = router;