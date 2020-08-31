const recordModel = require('../models/recordModel');

class recordService {
  /**
     *
     * @param startDate
     * @param endDate
     * @param minCount
     * @param maxCount
     * @returns {Promise<*>}
     */
  async getRecords({
    startDate, endDate, minCount, maxCount
  }) {
    const records = recordModel.model.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $project: {
          _id: false,
          key: true,
          createdAt: true,
          totalCount: {
            $sum: '$counts'
          }
        }
      },
      {
        $match: {
          totalCount: {
            $gte: minCount,
            $lt: maxCount
          }
        }
      }
    ]);
    return records;
  }
}

module.exports = new recordService();
