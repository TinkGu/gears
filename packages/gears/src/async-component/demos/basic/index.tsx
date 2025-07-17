/**
 * iframe: true
 * defaultShowCode: true
 */
import { useState } from 'react';
import { Button } from 'antd';
import { asyncComponent } from '@tinks/gears';
import styles from './styles.module.scss';

const AsyncExample = asyncComponent({
  component: () => import('./example'),
});

const PlaceHolder = () => <>组件还未加载</>;

export default () => {
  const [MyComponent, setComponent] = useState<any>(() => PlaceHolder);

  const load = () => {
    setComponent(() => AsyncExample);
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={load}>点击加载异步组件</Button>
      <div>当前组件名：{MyComponent?.name}</div>
      <div className={styles.moduleblock}>
        <MyComponent />
      </div>
    </div>
  );
};
