/**
 * defaultShowCode: false
 * iframe: true
 */
import { useState } from 'react';
import { Button, Checkbox } from 'antd';
import { Modal } from '@tinks/gears';

export default () => {
  const [visible, setVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleToggle = () => {
    setVisible((x) => !x);
  };

  return (
    <div>
      <Button onClick={() => handleToggle()}>点击查看协议</Button>
      <Modal
        visible={visible}
        type="info"
        title="协议弹窗"
        disabled={!agree}
        okText={!agree ? '请先同意' : '继续'}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <div>
          <p>请仔细阅读并同意以下协议内容</p>
          <Checkbox onChange={(e) => setAgree(e.target.checked)} checked={agree}>
            我已阅读并同意协议
          </Checkbox>
        </div>
      </Modal>
    </div>
  );
};
