import { useState } from 'react';
import { Modal, ModalProps, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { withPortal, PortalProps } from '@tinks/gears';
import { globalFormConfig } from '../exports-utils';

const empty = {};
const noop = () => null;

type OmitAntModalProps = 'visible' | 'footer' | 'onOk' | 'onCancel' | 'okText' | 'cancelText';

export type AntModalProps = Omit<ModalProps, OmitAntModalProps> &
  PortalProps & {
    /** 是否可以获取 antd provider */
    withProvider?: boolean;
  };

function BaseModal(props: AntModalProps) {
  const [visible, setVisible] = useState(true);
  const { onDestroy = noop, children, ...modalProps } = props || empty;
  const destroy = () => {
    setVisible(false);
  };

  return (
    <ConfigProvider locale={zhCN} form={globalFormConfig}>
      <Modal
        destroyOnClose={true}
        destroyOnHidden={true}
        maskClosable={false}
        footer={null}
        onCancel={destroy}
        {...modalProps}
        open={visible}
        afterClose={onDestroy}
      >
        {typeof children === 'function' ? children(destroy) : children}
      </Modal>
    </ConfigProvider>
  );
}

export const AntModal = withPortal<AntModalProps>(BaseModal);
