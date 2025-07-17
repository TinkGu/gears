/**
 * iframe: true
 * mobile: true
 * defaultShowCode: true
 */
import { useEffect } from 'react';
import { Popup } from '@tinks/gears';

export default () => {
  const popupStyle = { padding: 10, background: 'rgba(0,0,0,0.07)', borderRadius: 2 };
  useEffect(() => {
    // 返回值是一个回调，用于关闭这个浮层
    const destroy = Popup.show({
      mask: false,
      content: () => <div style={popupStyle}>这是一个浮层</div>,
    });
    return destroy;
  }, []);

  return <div>我是背景层</div>;
};
