const handleError = require('./handleError');
const ERROR_MESSAGE = require('./ErrorMessage');

const Validator = {
  validateBridgeSize(size) {
    if (+size < 3 || +size > 20 || Number.isNaN(+size)) {
      return handleError(ERROR_MESSAGE.bridgeSize);
    }
    return true;
  },
};

module.exports = Validator;
