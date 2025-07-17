import React, { memo, useCallback, useState } from 'react';
import { Button, FormInstance, message } from 'antd';
import { goBack } from '@tinks/xeno/navigate';
import { useDebounceFn } from '@tinks/xeno/react';
import classNames from 'classnames/bind';
import { confirm } from '../confirm';
import { messageError } from '../exports-utils/message';
import styles from './styles.scss';

const cx = classNames.bind(styles);

function FormBtnsInner({
  className = '',
  okClassName = '',
  cancelClassName = '',
  onOk,
  onCancel,
  okText,
  cancelText,
  disabled = false,
  autoBackOnCancel = false,
  form,
  align = 'center',
  size = '',
  cancelTitle = '',
}: {
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /** 为按钮最外层容器添加class */
  className?: string;
  /** 为确认按钮添加class */
  okClassName?: string;
  /** 为取消按钮添加class */
  cancelClassName?: string;
  /** 确认按钮的显示文本 */
  okText?: React.ReactNode;
  /** 取消按钮的显示文本 */
  cancelText?: React.ReactNode;
  /** 点击取消，弹出确认框的显示文案 */
  cancelTitle?: React.ReactNode;
  onOk?: (e: React.MouseEvent<HTMLElement>) => Promise<any> | void;
  /** 点击取消按钮的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * @description 自动询问是否离开，onCancel 后自动返回上一页
   * @default false
   */
  autoBackOnCancel?: boolean;
  /** 表单实例 */
  form?: FormInstance<any>;
  /**
   * @description 对齐方式
   * @default "center"
   */
  align?: 'center' | 'right';
  /**
   * @description 按钮尺寸
   * @default ""
   */
  size?: '' | 'small';
}) {
  const [loading, setLoading] = useState(false);
  const shouldShowCancel = typeof onCancel === 'function' || autoBackOnCancel;

  /** 自动进行表单校验，成功后才进行 onOk 回调 */
  const handleOk = useDebounceFn(async (e: ReactMouseEvent) => {
    if (typeof onOk !== 'function') {
      return;
    }

    // 自动进行表单校验
    if (form) {
      try {
        await form.validateFields();
      } catch (err) {
        const msg = (err as any)?.errorFields?.[0].errors?.[0];
        if (msg) {
          message.error(msg);
        }
        return;
      }
    }

    const promise = onOk(e);
    if (promise && promise.then) {
      setLoading(true);
      promise
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          messageError(err);
          setLoading(false);
        });
    }
  });

  /** 离开前自动询问 + 自动返回上一页 */
  const handleCancel = useCallback(
    async (e: ReactMouseEvent) => {
      if (autoBackOnCancel) {
        const isOk = await confirm({
          title: cancelTitle || '确定离开吗？',
        });
        if (!isOk) {
          return;
        }
      }

      if (typeof onCancel === 'function') {
        onCancel(e);
        return;
      }

      if (autoBackOnCancel) {
        goBack();
      }
    },
    [onCancel, autoBackOnCancel, cancelTitle],
  );

  return (
    <div className={cx('mg-form-btns', align, className, size)}>
      {shouldShowCancel && (
        <Button onClick={handleCancel} className={cx('mg-form-btn', cancelClassName)}>
          {cancelText || '取消'}
        </Button>
      )}
      <Button onClick={handleOk} type="primary" disabled={!!disabled} loading={!!loading} className={cx('mg-form-btn', okClassName)}>
        {okText || '确认'}
      </Button>
    </div>
  );
}

/**
 * 表单确认按钮，默认只展示「确认」按钮
 *
 * - 根据传入的 onOk，表单按钮自动 loading
 * - 若传入 form 实例，自动校验表单
 * - 当传入 onCancel 或者 autoBackOnCancel 时，才展示『取消』按钮
 */
export const FormBtns = memo(FormBtnsInner);
