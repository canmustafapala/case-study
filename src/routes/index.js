const express = require('express');

const router = express.Router();
const recordController = require('../controllers/recordController');

/**
 * Get filtered records
 * @route Get /api/records
 * @group Records
 * @param {string} startDate.query.required - Start Date
 * @param {string} endDate.query.required - End Date
 * @param {number} minCount.query.required - Min Count
 * @param {number} maxCount.query.required - Max Count
 * @returns {object} 200 -
 * @returns {Error}  default - Unexpected error
 */
router.get('/api/records', recordController.getRecords);

module.exports = router;
