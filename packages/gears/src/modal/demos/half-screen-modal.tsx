/**
 * defaultShowCode: false
 * iframe: true
 * mobile: true
 */
import { useEffect } from 'react';
import { Button } from 'antd';
import { Modal } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';

export default () => {
  const showHalfModal = () => {
    return Modal.show({
      position: 'bottom',
      type: 'confirm',
      title: '订单制作中',
      content: () => <div>是否接收完成通知</div>,
    });
  };

  useEffect(() => {
    const destroy = showHalfModal();
    return destroy;
  }, []);

  return (
    <DemoBlock top>
      <Button onClick={showHalfModal}>点击查看半屏弹窗</Button>
    </DemoBlock>
  );
};
