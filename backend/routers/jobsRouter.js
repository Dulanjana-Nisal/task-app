const express = require('express');
const { getAllJobs, createJobs, getSingleJobs, updateJobs, deleteJobs } = require('../controllers/jobsController');
const router = express.Router();

//create routers
router.route('').get(getAllJobs).post(createJobs);
router.route('/:id').get(getSingleJobs).patch(updateJobs).delete(deleteJobs);

module.exports = router;