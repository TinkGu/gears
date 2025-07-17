import { Modal, ModalFuncProps } from 'antd';

export function confirm(modalConfig: ModalFuncProps) {
  return new Promise((resolve) => {
    Modal.confirm({
      okText: modalConfig.okText || '确定',
      cancelText: modalConfig.cancelText || '取消',
      ...modalConfig,
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
      icon: modalConfig.title ? undefined : null,
    });
  });
}
