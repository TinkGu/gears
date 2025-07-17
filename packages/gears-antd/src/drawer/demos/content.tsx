/**
 * defaultShowCode: true
 */
import { Button } from 'antd';
import { AntDrawer } from '@tinks/gears-antd';

export default () => {
  const handleShowDrawer = () => {
    const destroy = AntDrawer.show({
      title: '抽屉标题',
      content: '我是抽屉内容，三秒后自动关闭',
    });
    setTimeout(destroy, 3000);
  };
  return (
    <div>
      <Button onClick={handleShowDrawer}>点击打开抽屉</Button>
    </div>
  );
};
