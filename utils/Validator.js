import handleError from './handleError.js';
import VALUES from '../constants/Values.js';
import MESSAGES from '../constants/Messages.js';

const Validator = {
  validateLength(length) {
    if (
      length > VALUES.maximumLength ||
      length < VALUES.minimumLength ||
      !Number.isSafeInteger(length)
    )
      return handleError(MESSAGES.invalidLength);
    return true;
  },
  validateDirection(direction) {
    if (direction !== MESSAGES.up && direction !== MESSAGES.down)
      return handleError(MESSAGES.invalidDirection);
    return true;
  },
};

export default Validator;
