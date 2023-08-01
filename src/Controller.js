const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Validator = require('../utils/Validator');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Controller {
  #bridge;

  play() {
    OutputView.printIntro();
    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {
    if (!Validator.validateBridgeSize(size)) return this.readBridgeSize();
    OutputView.printMessage(size);
    this.#bridge = BridgeMaker.makeBridge(size, generate);
  }
}

module.exports = Controller;
