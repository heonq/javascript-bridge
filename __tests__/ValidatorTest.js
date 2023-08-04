const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');
const ERROR_MESSAGE = require('../utils/ErrorMessage');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('유효성 검사 테스트', () => {
  test('다리 길이 입력 유효성 검사 테스트', () => {
    const logSpy = getLogSpy();
    const answers = [-1, 1, 21, 'a'];
    answers.forEach((answer) => Validator.validateBridgeSize(answer));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE.bridgeSize));
  });
});
