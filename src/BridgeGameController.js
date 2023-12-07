import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';

class BridgeGameController {
  async play() {
    await this.printIntro();
  }

  async printIntro() {
    OutputView.printIntro();
    await this.readBridgeSize();
  }
  async readBridgeSize() {
    const Length = await InputView.readBridgeLength();
  }
}

export default BridgeGameController;
