/** 是否必填 */
export const required = { required: true };

/**
 * 数字大小校验，支持限制最大值、最小值
 *
 * 默认最小值 1，最大值 999999
 */
export function numberRule({ max = 999999, min = 1 }: { max?: number; min?: number }): any {
  return { type: 'number', transform: (x: any) => Number(x) || 0, max, min } as any;
}

/** 文本长度限制 */
export const txtLenRule = (maxOrOptions: number | { min?: number; max?: number }) => {
  const t: any = { type: 'string', transform: (x: any) => (x === undefined || x === null ? '' : x + '') };
  if (typeof maxOrOptions === 'number') {
    t.max = maxOrOptions;
  }
  if (typeof maxOrOptions === 'object') {
    if (maxOrOptions.min !== undefined) {
      t.min = maxOrOptions.min;
    }
    if (maxOrOptions.max !== undefined) {
      t.max = maxOrOptions.max;
    }
  }
  return t;
};

const httpsOnlyReg = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
const urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;

/**
 * url 校验
 * - 默认仅校验 url
 * - httpsOnly: 仅校验 https 开头的链接
 * - domains: 支持域名校验，如 ['//www.google.com', 'https://image.google.com/a'] 等
 * */
export const urlRule = (options?: { httpsOnly?: boolean; domains?: string[]; message?: string }) => {
  if (options?.domains?.length) {
    const whiteUrlList: string[] = [];
    options.domains?.forEach((x) => {
      if (!x) {
        return;
      }

      // 自动完型 http、https
      if (x.startsWith('//')) {
        const reg = options?.httpsOnly ? `https:${x}` : `https?:${x}`;
        whiteUrlList.push(reg);
        return;
      }

      whiteUrlList.push(x);
    });
    return {
      pattern: new RegExp(`^(${whiteUrlList.join('|')})`),
      message: options?.message || `链接需要以 ${whiteUrlList.join(' 或 ')} 为前缀`,
    };
  }

  if (options?.httpsOnly) {
    return {
      pattern: httpsOnlyReg,
      message: options?.message || '请输入以 https 开头的 URL 链接',
    };
  }

  return {
    pattern: urlReg,
    message: options?.message || '请输入合法的 URL 链接',
  };
};

/** 字符校验，只支持大小写英文、下划线、横杠和点，对 urlencode 友好 */
export const codeRule = (options?: { message?: string }) => {
  return {
    pattern: /^[a-zA-Z0-9_\-.]+$/,
    message: options?.message || '仅支持英文、数字、_、-和 .',
  };
};
