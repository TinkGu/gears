/**
 * defaultShowCode: true
 * iframe: true
 */
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { AntModal } from '@tinks/gears-antd';

const modal = AntModal.create();
const showLoginTipModal = () => {
  modal.show({
    content: '检测到您最近登录异常',
  });
};

export default () => {
  const [mocking, setMocking] = useState(false);
  // 模拟消息推送
  useEffect(() => {
    if (!mocking) {
      return;
    }
    const timer = setInterval(() => {
      showLoginTipModal();
    }, 4000);
    return () => clearInterval(timer);
  }, [mocking]);

  return (
    <div>
      <Button onClick={() => setMocking((x) => !x)}>{mocking ? '终止模拟' : '开始模拟'}</Button>
    </div>
  );
};
