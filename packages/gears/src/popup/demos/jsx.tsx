/**
 * iframe: true
 * defaultShowCode: true
 * mobile: true
 */
import { useState } from 'react';
import { Button } from 'antd';
import { Popup } from '@tinks/gears';

export default () => {
  const [visible, setVisible] = useState(false);
  const popupStyle = { padding: 10, background: 'rgba(0,0,0,0.07)', borderRadius: 2, color: '#fff' };

  return (
    <>
      <div>
        <Button onClick={() => setVisible(true)}>打开浮层</Button>
        {visible && (
          <Popup maskClosable={true} onDestroy={() => setVisible(false)} style={popupStyle}>
            这是带遮罩的浮层
          </Popup>
        )}
      </div>
    </>
  );
};
