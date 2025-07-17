/**
 * defaultShowCode: true
 */
import { Button } from 'antd';
import { AntModal } from '@tinks/gears-antd';

export default () => {
  const handleShowModal = () => {
    AntModal.show({
      content: (destory) => {
        return (
          <div>
            我是弹窗内容，啦啦啦~
            <br />
            <br />
            <br />
            <Button type="primary" onClick={destory}>
              点击关闭弹窗
            </Button>
          </div>
        );
      },
    });
  };
  return (
    <div>
      <Button onClick={handleShowModal}>点击打开弹窗</Button>
    </div>
  );
};
