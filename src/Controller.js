const OutputView = require('./OutputView');
const InputView = require('./InputView');

class Controller {
  play() {
    OutputView.printIntro();
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(size) {}
}

module.exports = Controller;
