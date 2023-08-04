const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');
const ERROR_MESSAGE = require('../utils/ErrorMessage');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('유효성 검사 테스트', () => {
  test.each([
    [[-1, 1, 21, 'a'], ERROR_MESSAGE.bridgeSize, Validator.validateBridgeSize],
    [['u', 'd', 'A', 'UU', 'DD'], ERROR_MESSAGE.direction, Validator.validateDirection],
    [['r', 'q', 'U', 'D', 'Retry', 'Quit'], ERROR_MESSAGE.command, Validator.validateCommand],
  ])('사용자가 입력한 값에 대한 유효성 검사', (input, errorMessage, validateMethod) => {
    const logSpy = getLogSpy();
    input.forEach((answer) => validateMethod(answer));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
  });
});
