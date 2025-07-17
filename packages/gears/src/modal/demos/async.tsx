/**
 * defaultShowCode: false
 * iframe: true
 * mobile: true
 */
import { Button } from 'antd';
import { Modal, toast } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';

export default () => {
  const showAsync = async () => {
    const isOk = await Modal.confirm({
      title: 'V我50',
      content: '你确定要给我50元吗？',
    });
    if (isOk) {
      toast.info('ok');
    }
  };

  return (
    <DemoBlock top>
      <Button onClick={showAsync}>点击确认后，执行后续流程</Button>
    </DemoBlock>
  );
};
