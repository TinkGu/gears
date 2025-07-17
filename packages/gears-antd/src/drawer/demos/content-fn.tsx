/**
 * defaultShowCode: false
 */
import { Button } from 'antd';
import { AntDrawer } from '@tinks/gears-antd';

export default () => {
  const handleShowDrawer = () => {
    AntDrawer.show({
      content: (destory) => {
        return (
          <div>
            我是抽屉内容，啦啦啦~
            <br />
            <br />
            <br />
            <Button type="primary" onClick={destory}>
              点击关闭抽屉
            </Button>
          </div>
        );
      },
    });
  };
  return (
    <div>
      <Button onClick={handleShowDrawer}>点击打开抽屉</Button>
    </div>
  );
};
