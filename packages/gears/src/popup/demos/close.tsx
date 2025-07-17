/**
 * iframe: true
 * defaultShowCode: true
 * mobile: true
 */
import { Button } from 'antd';
import { Popup } from '@tinks/gears';

export default () => {
  const popupStyle = { padding: 10, background: 'rgba(0,0,0,0.07)', borderRadius: 2, color: '#fff' };
  const openPopup = () => {
    // 返回值是一个回调，用于关闭这个浮层
    Popup.show({
      // content 函数，为浮层提供一个关闭函数
      content: (onDestroy) => (
        <>
          <div style={popupStyle}>苟利国家生死以，岂因祸福避趋之 (ΘωΘ) </div>
          <Button onClick={onDestroy}>关闭浮层</Button>
        </>
      ),
    });
  };

  return (
    <div>
      <Button type="primary" onClick={openPopup}>
        打开浮层
      </Button>
    </div>
  );
};
