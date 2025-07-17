/**
 * defaultShowCode: true
 * title: 应用场景
 * desc: 当传入 onCancel 或者 autoBackOnCancel 时，展示『取消』按钮，传入autoBackOnCancel会走默认的功能，即为返回上一个页面，故建议手动传入onCancel，来决定取消之后的逻辑，autoBackOnCancel为true时，会弹出确认窗口
 */
import { message } from 'antd';
import { FormBtns } from '@tinks/gears-antd';

export default () => {
  function handleCancel() {
    message.info('取消操作');
  }
  return <FormBtns onCancel={handleCancel} autoBackOnCancel={true} cancelTitle="确认要取消操作么?" />;
};
