const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 단위 테스트', () => {
  test.each([
    [['U', 'D', 'D'], ['U', 'D', 'U'], true],
    [['U', 'D', 'D'], ['U', 'D', 'D'], false],
  ])('다리를 이동하고 막혀있는지 확인하는 기능 테스트', (bridge, direction, result) => {
    const bridgeGame = new BridgeGame();
    direction.forEach((a) => bridgeGame.move(a, bridge));
    expect(bridgeGame.checkBlocked(direction[2])).toEqual(result);
  });
});
