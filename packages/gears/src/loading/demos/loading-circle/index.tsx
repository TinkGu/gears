/**
 * defaultShowCode: false
 * mobile: true
 */
import { CircleLoading } from '@tinks/gears';
import classNames from 'classnames/bind';
import { DemoBlock } from 'demo-helper';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default () => {
  return (
    <>
      <DemoBlock title="尺寸" space>
        <CircleLoading size="small" />
        <CircleLoading />
        <CircleLoading size="large" />
      </DemoBlock>

      <DemoBlock title="主题" space>
        <CircleLoading />
        <CircleLoading theme="light" />
      </DemoBlock>

      <DemoBlock title="自定义颜色" space>
        <CircleLoading color="#d9f7be" />
      </DemoBlock>

      <DemoBlock title="结合 Button" space>
        <div className={cx('button')}>
          <CircleLoading className={cx('loading')} size="small" color="#fff" />
          确认中
        </div>
      </DemoBlock>
    </>
  );
};
