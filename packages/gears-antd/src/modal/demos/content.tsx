/**
 * defaultShowCode: true
 */
import { Button } from 'antd';
import { AntModal } from '@tinks/gears-antd';

export default () => {
  const handleShowModal = () => {
    const destroy = AntModal.show({
      content: '我是弹窗内容，三秒后自动关闭',
    });
    setTimeout(destroy, 3000);
  };
  return (
    <div>
      <Button onClick={handleShowModal}>点击打开弹窗</Button>
    </div>
  );
};
