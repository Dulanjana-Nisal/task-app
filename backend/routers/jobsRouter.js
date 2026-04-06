const express = require('express');
const { getAllJobs, createJobs, getSingleJobs, updateJobs, deleteJobs } = require('../controllers/jobsController');
const authenticationMiddleware = require('../middleware/AuthenticationMiddlewaare');
const router = express.Router();

//create routers
router.route('').get(authenticationMiddleware, getAllJobs).post(createJobs);
router.route('/:id').get(getSingleJobs).patch(updateJobs).delete(deleteJobs);

module.exports = router;