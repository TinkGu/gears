/**
 * iframe: true
 * defaultShowCode: true
 * mobile: true
 */
import { Button } from 'antd';
import { Popup } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';

export default () => {
  const popupStyle = { color: '#fff', padding: 10, background: '#000', borderRadius: 2 };

  const handleShow = (position: 'top' | 'center' | 'bottom') => {
    Popup.show({
      position,
      style: popupStyle,
      maskClosable: true,
      content: () => <div>浮层内容</div>,
    });
  };

  return (
    <>
      <DemoBlock>
        <Button onClick={() => handleShow('top')}>默认顶部</Button>
      </DemoBlock>
      <DemoBlock>
        <Button onClick={() => handleShow('center')}>center 页面中间</Button>
      </DemoBlock>
      <DemoBlock>
        <Button onClick={() => handleShow('bottom')}>bottom 页面底部</Button>
      </DemoBlock>
    </>
  );
};
