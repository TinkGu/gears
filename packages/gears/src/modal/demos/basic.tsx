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
  const showInfo = () => {
    Modal.show({
      title: '只有标题',
      type: 'info',
    });
  };
  const showConfirm = () => {
    return Modal.show({
      type: 'confirm',
      title: '标题',
      content: '这是描述内容，描述内容可以根据需要自定义或者删除，一般两行以内',
    });
  };
  const showWarning = () => {
    Modal.show({
      warning: true,
      type: 'confirm',
      title: '警告',
      content: '操作存在风险，确定要继续操作吗',
    });
  };

  const showCustom = () => {
    Modal.show({
      title: '标题',
      content: (onDestroy: () => void) => {
        return (
          <>
            <div>
              <p>自定义内容...</p>
              <p>自定义内容...</p>
              <p>自定义内容...</p>
              <p>自定义内容...</p>
            </div>
            <Button onClick={onDestroy}>关闭弹窗</Button>
          </>
        );
      },
    });
  };

  useEffect(() => {
    const destroy = showConfirm();
    return destroy;
  }, []);

  return (
    <DemoBlock top wrap title="基本使用">
      <Button onClick={showInfo}>info</Button>
      <Button onClick={showConfirm}>确认 confirm</Button>
      <Button onClick={showWarning}>警告 warning</Button>
      <Button onClick={showCustom}>自定义弹窗</Button>
    </DemoBlock>
  );
};
