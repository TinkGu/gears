/**
 * defaultShowCode: true
 * title: 应用场景
 * desc: 用于需要用户在对 confirm 里内容进行确认后再走之后逻辑的场景
 */
import { Button, message } from 'antd';
import { confirm } from '@tinks/gears-antd';

export default () => {
  async function handleClick() {
    const flag = await confirm({
      content: '只有点击确定以后，才会继续往下执行',
    });
    if (flag) {
      message.success('逻辑继续往下执行');
    } else {
      message.info('不再执行之后逻辑');
    }
  }
  return (
    <div>
      <Button onClick={handleClick}>click</Button>
    </div>
  );
};
