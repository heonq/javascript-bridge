import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';
import Validator from '../utils/Validator.js';

class BridgeGameController {
  async play() {
    await this.printIntro();
  }

  async printIntro() {
    OutputView.printIntro();
    await this.readBridgeLength();
  }
  async readBridgeLength() {
    const length = await InputView.readBridgeLength();
    this.handleLength(length);
  }
  async handleLength(length) {
    if (!Validator.validateLength(length)) return this.readBridgeLength();
  }
}

export default BridgeGameController;
