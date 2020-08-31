class validationError extends Error {
  constructor(message, additionalData) {
    super(message);
    this.code = 400;
    this.msg = message;
    this.additionalData = additionalData;
  }
}

module.exports = validationError;
