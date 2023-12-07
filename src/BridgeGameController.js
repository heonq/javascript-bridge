import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';
import Validator from '../utils/Validator.js';
import BridgeGame from './BridgeGame.js';

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
    this.bridgeGame = new BridgeGame(length);
    this.readDirection();
  }
  async readDirection() {
    OutputView.printLineBreak();
    const direction = await InputView.readDirection();
    this.handleDirection(direction);
  }
  async handleDirection(direction) {
    if (!Validator.validateDirection(direction)) return this.readDirection();
  }
}

export default BridgeGameController;
