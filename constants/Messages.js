const PREFIX = '[ERROR]';

const MESSAGES = Object.freeze({
  intro: '다리 건너기 게임을 시작합니다.',
  lengthQuery: '다리의 길이를 입력해주세요.',
  directionQuery: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  retryQuery: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q',
  passable: 'O',
  impassable: 'X',
  historyStart: '[ ',
  historyEnd: ' ]',
  historyDelimiter: ' | ',
  gameResultHeader: '최종 게임 결과',
  gameResult: '게임 성공 여부: ',
  success: '성공',
  failure: '실패',
  trialCount: '총 시도한 횟수: ',
  lineBreak: '',
  invalidLength: `${PREFIX} 다리 길이는 3이상 20이하의 정수로 입력해 주세요.`,
  invalidDirection: `${PREFIX} 이동할 칸은 U와 R 중 하나를 입력해 주세요.`,
  invalidRetry: `${PREFIX} 재시도 여부는 R과 Q 중 하나를 입력해 주세요.`,
});

export default MESSAGES;
