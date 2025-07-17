import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

function PageHeaderInner({
  className = '',
  title,
  bordered,
  children,
  extra,
}: {
  /** 左边侧内容，通常为标题 */
  title: React.ReactNode;
  /** 右边侧内容，通常为按钮 */
  children?: React.ReactNode;
  /** 最外层 className */
  className?: string;
  /** 是否展示底边 */
  bordered?: boolean;
  /** 额外内容 */
  extra?: React.ReactNode;
}) {
  return (
    <header className={cx('mga-page-header', className, { bordered })}>
      <div className="mga-page-header__inner">
        <div className="mga-page-header__title">{title}</div>
        <div>{children}</div>
      </div>
      {!!extra && <div className="mga-page-header__extra">{extra}</div>}
    </header>
  );
}

/**
 * 页面通用头部
 */
export const PageHeader = memo(PageHeaderInner);
