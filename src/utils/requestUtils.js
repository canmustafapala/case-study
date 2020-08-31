const _ = require('lodash');
const validationError = require('../errors/validationError');

class requestUtils {
  /**
     *
     * @param params
     * @param paramList
     */

  requireParams(params, paramList) {
    if (typeof paramList === 'string') {
      if (!_.has(params, paramList)) throw new validationError('missing_parameter_exception', paramList);
    }
    else if (typeof paramList === 'object') {
      paramList.forEach((param) => {
        if (!_.has(params, param)) throw new validationError('missing_parameter_exception', param);
      });
    }
  }
}

module.exports = new requestUtils();
