import { message } from 'antd';
import { getErrorMsg } from '@tinks/xeno';

/** 自动判断错误类型，抛出合理的错误信息 */
export const messageError = (error: any, defaultMsg?: string) => {
  const text = getErrorMsg(error, defaultMsg);
  message.error(text);
  console.error(error);
};
