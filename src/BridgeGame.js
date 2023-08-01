const CONSTANTS = require('../utils/Constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #map;

  #distance;

  constructor() {
    this.#map = {
      U: [],
      D: [],
    };

    this.#distance = 0;
  }

  #updateDistance() {
    this.#distance = this.#map[0].length;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, bridge) {
    this.checkDirection(direction, bridge);
    this.#updateDistance();
  }

  checkDirection(direction, bridge) {
    const upAndDown = [CONSTANTS.up, CONSTANTS.down];
    this.#map[1 - upAndDown.indexOf(direction)].push(CONSTANTS.blank);
    if (bridge[this.#distance] === direction) {
      return this.#map[direction].push(CONSTANTS.passable);
    }
    return this.#map[direction].push(CONSTANTS.impassable);
  }

  checkBlocked(direction) {
    if (this.#map[direction][this.#distance] === CONSTANTS.impassable) {
      return true;
    }
    return false;
  }

  checkSuccess(bridge) {
    if (this.#distance === bridge.length) {
      return true;
    }
    return false;
  }

  getMap() {
    return Object.entries(this.#map).map((array) => array[1]);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
