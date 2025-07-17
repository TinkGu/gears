/**
 * defaultShowCode: false
 * iframe: true
 */
import { Button } from 'antd';
import { Modal } from '@tinks/gears';
import { delay } from '@tinks/xeno';
import { DemoBlock } from 'demo-helper';

export default () => {
  const showConfirm = () => {
    Modal.show({
      type: 'confirm',
      title: '望洞庭',
      content: '湖光秋月两相和，潭面无风镜未磨',
      onOk: () => delay(2000),
    });
  };

  return (
    <DemoBlock top>
      <Button onClick={showConfirm}>点击弹窗确认按钮，查看 loading 效果</Button>
    </DemoBlock>
  );
};
