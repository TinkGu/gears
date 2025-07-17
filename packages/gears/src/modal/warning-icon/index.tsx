import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export const WarningIcon = memo(({ className }: { className?: string }) => {
  return <div className={cx('mg-icon-warning', className)}></div>;
});
