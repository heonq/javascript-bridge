const CONSTANTS = require('../utils/Constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #map;

  #distance;

  #trial;

  constructor() {
    this.#map = {
      U: [],
      D: [],
    };

    this.#distance = 0;

    this.#trial = 1;
  }

  #updateDistance() {
    this.#distance = this.#map.U.length;
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
    const elseDirection = upAndDown[1 - upAndDown.indexOf(direction)];
    this.#map[elseDirection].push(CONSTANTS.blank);
    const result = bridge[this.#distance] === direction ? CONSTANTS.passable : CONSTANTS.impassable;
    this.#map[direction].push(result);
  }

  checkBlocked(direction) {
    if (this.#map[direction][this.#distance - 1] === CONSTANTS.impassable) {
      return true;
    }
    return false;
  }

  checkSuccess(bridgeLength) {
    if (this.#distance === bridgeLength) {
      return true;
    }
    return false;
  }

  getMap() {
    return Object.entries(this.#map).map((array) => array[1]);
  }

  getTrial() {
    return this.#trial;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#initMap();
    this.#updateDistance();
    this.#trial += 1;
  }

  #initMap() {
    this.#map = {
      U: [],
      D: [],
    };
  }
}

module.exports = BridgeGame;
