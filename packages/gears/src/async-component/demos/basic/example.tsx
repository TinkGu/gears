/**
 * iframe: true
 * defaultShowCode: true
 */
import { useEffect } from 'react';
import { toast } from '@tinks/gears';

let isFirst = true;

const Example = () => {
  useEffect(() => {
    if (isFirst) {
      isFirst = false;
      toast({ message: '首次加载' });
    }
  }, []);
  return <div>我是异步加载的模块</div>;
};

export default Example;
