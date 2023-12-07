import OutputView from './Views/OutputView.js';

class BridgeGameController {
  async play() {
    this.printIntro();
  }

  printIntro() {
    OutputView.printIntro();
  }
}

export default BridgeGameController;
