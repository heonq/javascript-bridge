const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Validator = require('../utils/Validator');

class Controller {
  play() {
    OutputView.printIntro();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    if (!Validator.validateBridgeSize(size)) return this.readBridgeSize();
  }
}

module.exports = Controller;
