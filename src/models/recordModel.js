const mongoose = require('mongoose');
const recordSchema = require('../schemas/recordSchema');

class recordModel {
  constructor() {
    this.model = mongoose.model('Record', recordSchema);
  }
}

module.exports = new recordModel();
