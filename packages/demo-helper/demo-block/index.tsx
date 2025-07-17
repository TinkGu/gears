import { Space } from 'antd';
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);
const SpaceStyle = { width: '100%' };

export const DemoBlock = ({
  top,
  padding = true,
  children,
  title,
  wrap,
  space,
}: {
  top?: boolean;
  padding?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  /** 自动换行 */
  wrap?: boolean;
  /** 自动填充空隙 */
  space?: boolean;
}) => {
  return (
    <div className={cx('demo-title', { top, padding })}>
      {title && <div className={cx('title')}>{title}</div>}
      {children && (
        <div className={cx('main')}>
          {space || wrap ? (
            <Space wrap={wrap} direction={wrap ? 'vertical' : 'horizontal'} style={SpaceStyle}>
              {children}
            </Space>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
};
