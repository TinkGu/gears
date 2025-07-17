import { useMemo } from 'react';
import { nuid } from '@tinks/xeno';

/** 用户创建随机 id */
export function useUuid(prefix?: string) {
  return useMemo(() => (prefix ? `${prefix}${nuid()}` : nuid() + ''), [prefix]);
}
