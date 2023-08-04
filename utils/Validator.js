const handleError = require('./handleError');
const ERROR_MESSAGE = require('./ErrorMessage');

const Validator = {
  validateBridgeSize(size) {
    if (+size < 3 || +size > 20 || Number.isNaN(+size)) {
      return handleError(ERROR_MESSAGE.bridgeSize);
    }
    return true;
  },
  validateDirection(direction) {
    if (direction !== 'U' && direction !== 'D') {
      return handleError(ERROR_MESSAGE.direction);
    }
    return true;
  },
  validateCommand(command) {
    if (command !== 'R' && command !== 'Q') {
      return handleError(ERROR_MESSAGE.command);
    }
    return true;
  },
};

module.exports = Validator;
