import React, { useMemo } from 'react';
import { countReactValidChildren } from '@tinks/xeno/react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);
const empty = {};

/** 模拟 table */
export function LabelRow({
  children,
}: {
  /** 子标签项 Label */
  children?: React.ReactNode;
}) {
  const count = countReactValidChildren(children);

  if (count === 0) {
    return null;
  }

  return <div className={cx('mg-label-row', `mg-label-row-${count}`)}>{children}</div>;
}

/** 表格某项 */
export function Label({
  className,
  label,
  children,
  width,
}: {
  /** 类名 */
  className?: string;
  /** 标签名 */
  label: React.ReactNode;
  /** 标签值 */
  children?: React.ReactNode;
  /** 一组标签的宽度 */
  width?: string;
}) {
  const style = useMemo(() => (width !== undefined ? { width } : empty), [width]);
  return (
    <div className={cx('mg-label-item', className)} style={style}>
      <div className={cx('mg-label-item__label')}>{label}</div>
      <div className={cx('mg-label-item__content')}>{children}</div>
    </div>
  );
}
