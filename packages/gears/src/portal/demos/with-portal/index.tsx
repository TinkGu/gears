/**
 * iframe: true
 * defaultShowCode: true
 */
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { withPortal } from '@tinks/gears';
import styles from './styles.module.scss';

interface ToastProps {
  children?: (onDestroy?: () => void) => React.ReactNode;
  onDestroy?: () => void;
  wait?: number;
}

/** toast 内容的主体，必须提供一个 children 和 onDestroy 回调 */
function ToastBody({ onDestroy, wait = 3000, children }: ToastProps) {
  useEffect(() => {
    if (!onDestroy) {
      return;
    }

    const timer = setTimeout(onDestroy, wait);
    return () => {
      clearTimeout(timer);
      onDestroy && onDestroy();
    };
  }, []);
  return (
    <div className={styles.toast}>
      <div className={styles.inner}>{!!children && children(onDestroy)}</div>
    </div>
  );
}

/** 被 withPortal 包装后，支持 portal 一样的调用方式 */
const Toast = withPortal<ToastProps>(ToastBody);

export default () => {
  const openPortal = () => {
    const index = Math.random() * 10;
    if (index >= 4) {
      Toast.show({
        wait: 2000,
        content: () => '大吉！',
      });
    } else {
      Toast.show({
        wait: 10000,
        content: (onDestroy) => (
          <div>
            <div>最近您✋🏻气可能不是特别好</div>
            <Button onClick={onDestroy}>不听不听，王八念经！</Button>
          </div>
        ),
      });
    }
  };

  return (
    <Button type="primary" onClick={openPortal}>
      测吉凶
    </Button>
  );
};
