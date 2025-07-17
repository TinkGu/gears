import { memo } from 'react';
import { Popover } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

interface QrcodeTooltipProps {
  /**
   * @description 二维码链接
   */
  url?: string;
  /** 图片 cls */
  className?: string;
}

/** 点击查看实际的二维码 */
function InnerQrcodeTooltip({ url, className = '' }: QrcodeTooltipProps) {
  if (!url) {
    return null;
  }

  return (
    <Popover placement="bottom" content={<img className={cx('qrcode-img')} src={url} alt="" />}>
      <QrcodeOutlined className={cx('qrcode-icon', className)} />
    </Popover>
  );
}

export const QrCodeTooltip = memo(InnerQrcodeTooltip);
