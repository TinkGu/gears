const events = [
  { type: 'given', data: { userName: '王思聪', account: '一亿' } },
  { type: 'given', data: { userName: '马化腾', account: ' 88 ' } },
  { type: 'given', data: { userName: '长者', account: ' 1 ' } },
  { type: 'given', data: { userName: '徐逸', account: ' 98 亿' } },
  { type: 'given', data: { userName: '12dora', account: ' 450 ' } },
];

const pick = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min;

/** 用定时器模拟 websocket 消息 */
export function connect(callback: (message: { type: string; data: any }) => void) {
  let timer = 0;
  timer = window.setInterval(() => {
    const eventIndex = pick(0, events.length - 1);
    callback(events[eventIndex]);
  }, 6000);
  return {
    disconnect: () => window.clearInterval(timer),
  };
}
