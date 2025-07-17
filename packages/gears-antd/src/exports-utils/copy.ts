import { message } from 'antd';

let clipboard: any = null;

async function lazyImport() {
  if (!clipboard) {
    clipboard = await import('clipboard-polyfill');
  }
}

/** 复制文字到剪贴板 */
export async function copyToClipBoard(str: string, info?: string) {
  try {
    if (!str || typeof str !== 'string') {
      return;
    }

    await lazyImport();
    clipboard.writeText(str);
    if (info) {
      message.success(info);
    } else {
      message.success('复制成功');
    }
  } catch (err) {
    console.error(err);
    message.error('复制失败，请刷新后重试');
  }
}
