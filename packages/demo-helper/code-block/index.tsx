import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export function Code({ data }: { data: any }) {
  if (!data) {
    return null;
  }
  return (
    <pre className={cx('code-box')}>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
}
