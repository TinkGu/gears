/**
 * defaultShowCode: false
 * mobile: true
 */
import { Button } from 'antd';
import { toast } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';

export default () => {
  const onToastInfo = () => {
    toast.info('woooo! 我是一个提示信息');
  };

  const onToastError = () => {
    const err = new Error('你错过了一个亿');
    toast.error(err, '默认错误文案');
  };

  return (
    <div>
      <DemoBlock top wrap title="简单写法">
        <Button onClick={onToastInfo}>toast.info</Button>
        <br />
        <Button onClick={onToastError}>toast.error</Button>
      </DemoBlock>
    </div>
  );
};
