/**
 * iframe: true
 * defaultShowCode: true
 */
import { useEffect, useMemo } from 'react';
import { Button } from 'antd';
import { Popup } from '@tinks/gears';
import { connect } from './utils';
import styles from './styles.module.scss';

export default () => {
  const likeTip = useMemo(() => Popup.create(), []);

  // 假设我们是一个直播应用，存在一个 websocket 场景，一旦用户被打赏，就展示一个全局动画或提示。
  // 该提示不应该重叠，后一个覆盖前一个
  useEffect(() => {
    const connection = connect((message) => {
      if (message.type === 'given') {
        // 多次调用 show 方法时，会自动 destroy 上一个浮层，保证当前的 popup 实例（即 likeTip）只生成一个浮层
        likeTip.show({
          position: 'center',
          content: (onDestroy) => (
            <div className={styles.popup}>
              <p>
                {message.data.userName}打赏了你{message.data.account}元
              </p>
              <div className={styles.btns}>
                <Button onClick={onDestroy}>感谢他 ❤️ </Button>
                <Button onClick={onDestroy}>知道了</Button>
              </div>
            </div>
          ),
        });
      }
    });

    return () => {
      connection.disconnect();
    };
  }, []);

  return <div></div>;
};
