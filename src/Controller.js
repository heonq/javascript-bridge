const OutputView = require('./OutputView');

class Controller {
  play() {
    OutputView.printIntro();
  }
}

module.exports = Controller;
