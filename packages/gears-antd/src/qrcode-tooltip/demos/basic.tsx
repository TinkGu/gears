/**
 * defaultShowCode: true
 */
import { QrCodeTooltip } from '@tinks/gears-antd';

export default () => {
  return (
    <div>
      一码不扫，何以扫天下
      <QrCodeTooltip url="https://raw.githubusercontent.com/TinkGu/github-cloud/refs/heads/master/gears/qrcode_gears.png" />
    </div>
  );
};
