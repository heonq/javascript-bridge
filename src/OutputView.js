const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/Message');
const CONSTANTS = require('../utils/Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    const map = bridgeGame.getMap();
    const mapStringArray = map.map(
      (row) => CONSTANTS.bridgeStart + row.join(CONSTANTS.division) + CONSTANTS.bridgeEnd,
    );
    mapStringArray.forEach((string) => this.printMessage(`${string}\n`));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, bridgeLength) {
    const successOrNot = bridgeGame.checkSuccess(bridgeLength)
      ? CONSTANTS.success
      : CONSTANTS.failure;
    this.printMessage(MESSAGE.gameResult);
    this.printMap(bridgeGame);
    this.printMessage(`${MESSAGE.successOrNot + successOrNot}\n`);
    this.printMessage(`${MESSAGE.trialCount + bridgeGame.getTrial()}\n`);
  },

  printMessage(message) {
    Console.print(message);
  },

  printIntro() {
    this.printMessage(MESSAGE.gameStart);
  },
};

module.exports = OutputView;
