/**
 * defaultShowCode: true
 */
import { useState } from 'react';
import { Button } from 'antd';
import { AntModal } from '@tinks/gears-antd';

export default () => {
  const [visible, setVisible] = useState(false);
  const handleShowModal = () => {
    setVisible(true);
  };
  const handleHideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={handleShowModal}>点击打开弹窗</Button>
      {visible && <AntModal onDestroy={handleHideModal}>我是弹窗内容，啦啦啦~</AntModal>}
    </div>
  );
};
