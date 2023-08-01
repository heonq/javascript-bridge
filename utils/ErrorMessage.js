const PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  bridgeSize: `${PREFIX}3에서 20사이의 숫자를 입력해주세요.`,
  direction: `${PREFIX}U와 D중 하나를 입력해주세요.`,
  command: `${PREFIX}R과 Q중 하나를 입력해주세요.`,
  capital: `${PREFIX}대문자로 입력해주세요.`,
});

module.exports = ERROR_MESSAGE;
