/**
 * defaultShowCode: true
 * title: 应用场景
 * desc: 用于处理表单提交等异步场景，如果onOk返回Promise，按钮自带loading效果，也可以传入一个普通的函数作为onClick
 */
import { message } from 'antd';
import { FormBtns } from '@tinks/gears-antd';
import { delay } from '@tinks/xeno';

export default () => {
  const handleOk = async () => {
    await delay(2000);
    message.success('点击按钮成功');
  };
  return <FormBtns onOk={handleOk} />;
};
