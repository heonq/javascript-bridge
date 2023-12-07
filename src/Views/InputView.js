import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeLength() {
    const length = await Console.readLineAsync(MESSAGES.lengthQuery);
    return Number(length);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readDirection() {
    return Console.readLineAsync(MESSAGES.directionQuery);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

export default InputView;
