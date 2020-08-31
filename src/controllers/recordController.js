const recordService = require('../services/recordService');
const requestUtils = require('../utils/requestUtils');

class recordController {
  /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
  async getRecords(req, res) {
    try {
      requestUtils.requireParams(req.query, ['startDate', 'endDate', 'minCount', 'maxCount']);
      const startDate = new Date(req.query.startDate);
      const endDate = new Date(req.query.endDate);
      const minCount = Number(req.query.minCount);
      const maxCount = Number(req.query.maxCount);
      const records = await recordService.getRecords({
        startDate, endDate, minCount, maxCount
      });

      res.json({
        code: 0,
        msg: 'Success',
        records
      });
    }
    catch (error) {
      res.status(error.code).json(error);
    }
  }
}

module.exports = new recordController();
