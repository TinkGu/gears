/**
 * defaultShowCode: false
 * iframe: true
 */
import { Button } from 'antd';
import { Modal } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';

export default () => {
  const showTitle = () => {
    Modal.show({
      type: 'info',
      title: '自定义标题',
    });
  };
  const showContent = () => {
    Modal.show({
      type: 'info',
      content: '自定义内容',
    });
  };
  const showCustom = () => {
    Modal.show({
      title: '哲思',
      content: (onDestroy) => (
        <div>
          <br />
          塑造自己过程很疼，但最终你能收获一个更好的自己
          <br />
          <Button onClick={onDestroy}>关闭弹窗</Button>
        </div>
      ),
    });
  };

  return (
    <DemoBlock wrap top>
      <Button onClick={showTitle}>设置 title</Button>
      <Button onClick={showContent}>设置 content</Button>
      <Button onClick={showCustom}>完全自定义</Button>
    </DemoBlock>
  );
};
