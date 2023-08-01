const OutputView = require('../src/OutputView');

const handleError = (error) => {
  try {
    throw new Error(error);
  } catch {
    OutputView.printMessage(error);
    return false;
  }
};

module.exports = handleError;
