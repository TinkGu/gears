/**
 * iframe: true
 * defaultShowCode: true
 */
import { useEffect } from 'react';
import { Portal } from '@tinks/gears';
import styles from './basic.module.scss';

export default () => {
  useEffect(() => {
    // 返回值是一个回调，用于关闭这个浮层
    const destroy = Portal.show({
      content: () => <div className={styles.portal}>这是一个浮层</div>,
    });
    return destroy;
  }, []);

  return <div className={styles.bg}>我是背景层</div>;
};
