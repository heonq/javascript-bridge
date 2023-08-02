const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Validator = require('../utils/Validator');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class Controller {
  #bridge;

  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

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
    this.readDirection();
  }

  readDirection() {
    InputView.readMoving(this.handleDirection.bind(this));
  }

  handleDirection(direction) {
    if (!Validator.validateDirection(direction)) return this.readDirection();
    OutputView.printMessage(direction);
    this.#bridgeGame.move(direction, this.#bridge);
    OutputView.printMap(this.#bridgeGame);
    this.checkNextStep(direction);
  }

  checkNextStep(direction) {
    if (this.#bridgeGame.checkBlocked(direction)) {
      return this.handleBlocked();
    }
    if (this.#bridgeGame.checkSuccess(this.#bridge.length)) {
      return OutputView.printResult(this.#bridgeGame, this.#bridge.length);
    }
    this.readDirection();
  }

  handleBlocked() {
    InputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    if (!Validator.validateCommand(command)) return this.handleBlocked();
    OutputView.printMessage(command);
    if (command === 'R') return this.handleRestart();
    return OutputView.printResult(this.#bridgeGame);
  }

  handleRestart() {
    this.#bridgeGame.retry();
    this.readDirection();
  }
}

module.exports = Controller;
