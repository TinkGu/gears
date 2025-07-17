import { useState } from 'react';
import { Drawer, DrawerProps, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { withPortal, PortalProps } from '@tinks/gears';
import { globalFormConfig } from '../exports-utils';

const empty = {};
const noop = () => null;

type OmitAntDrawerProps = 'visible';

export type AntDrawerProps = Omit<DrawerProps, OmitAntDrawerProps> &
  PortalProps & {
    /** 是否可以获取 antd provider */
    withProvider?: boolean;
  };

function BaseDrawer(props: AntDrawerProps) {
  const [visible, setVisible] = useState(true);
  const { onDestroy = noop, children, content, ...drawerProps } = props || empty;
  const destroy = () => {
    setVisible(false);
  };

  return (
    <ConfigProvider locale={zhCN} form={globalFormConfig}>
      <Drawer
        destroyOnClose={true}
        destroyOnHidden={true}
        maskClosable={false}
        footer={null}
        {...drawerProps}
        open={visible}
        onClose={onDestroy}
      >
        {typeof children === 'function' ? children(destroy) : children}
      </Drawer>
    </ConfigProvider>
  );
}

export const AntDrawer = withPortal<AntDrawerProps>(BaseDrawer);
