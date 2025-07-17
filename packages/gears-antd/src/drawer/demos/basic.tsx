/**
 * defaultShowCode: true
 */
import { useState } from 'react';
import { Button } from 'antd';
import { AntDrawer } from '@tinks/gears-antd';

export default () => {
  const [visible, setVisible] = useState(false);
  const handleShowDrawer = () => {
    setVisible(true);
  };
  const handleHideDrawer = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={handleShowDrawer}>点击打开抽屉</Button>
      {visible && <AntDrawer onDestroy={handleHideDrawer}>我是抽屉内容，啦啦啦~</AntDrawer>}
    </div>
  );
};
