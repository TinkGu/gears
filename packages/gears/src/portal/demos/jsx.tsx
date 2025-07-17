/**
 * iframe: true
 * defaultShowCode: true
 */
import { Portal } from '@tinks/gears';
import styles from './basic.module.scss';

export default () => {
  return (
    <>
      <div className={styles.bg}>
        我是背景层
        <Portal>
          <div className={styles.portal}>这是一个浮层</div>
        </Portal>
      </div>
    </>
  );
};
