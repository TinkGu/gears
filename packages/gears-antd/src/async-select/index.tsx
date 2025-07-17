import React, { memo, useMemo, useRef, useState } from 'react';
import { Select, SelectProps } from 'antd';
import { useDebounceFn, useLatest } from '@tinks/xeno/react';
import { messageError } from '../exports-utils/message';

const empty: any[] = [];

export type AsyncSelectProps<T> = SelectProps<any> & {
  /**
   * @description 获取异步数据的方法，返回的数据会作为 Select options 使用
   * @type () => Promise<T[]>
   */
  onLoad?: (() => Promise<T[]>) | (() => Promise<{ records: T[] }>);
  /** 关闭缓存，每次打开选框都会拉取接口 */
  disableCache?: boolean;
  /** 异步 options 数组中作为 label 的字段名 (传 onLoad 以后，此项为必填项) */
  labelKey?: string;
  /** 异步 options 数组中作为 value 的字段名 (传 onLoad 以后，此项为必填项) */
  valueKey?: string;
  /** 初始选项的值 */
  defaultOptionValue?: any;
  /** 初始选项的 label */
  defaultOptionLabel?: any;
  /** 格式化远程数据到 select option 数组 */
  formatOption?: (x: T, i: number) => { value: any; label: React.ReactNode; disabled?: boolean };
};

function AsyncSelectInner<T>({
  onLoad,
  disableCache = false,
  labelKey,
  valueKey,
  formatOption,
  defaultOptionValue,
  defaultOptionLabel,
  ...selectProps
}: AsyncSelectProps<T>) {
  const [status, setStatus] = useState<'ok' | 'error' | 'loading'>('ok');
  const [records, setRecords] = useState<T[]>([]);
  const lenRef = useRef(0);
  const hasFetched = useRef(false);
  const onLoadRef = useLatest(onLoad);
  const formatOptionRef = useLatest(formatOption);
  // 下拉选项，如果已经后端数据，使用后端数据，否则使用默认值
  const options = useMemo(() => {
    if (hasFetched.current && typeof formatOptionRef.current === 'function') {
      return records.map(formatOptionRef.current);
    }

    if (hasFetched.current && labelKey && valueKey) {
      return records.map((x: any) => ({ label: x[labelKey], value: x[valueKey] }));
    }

    if (defaultOptionValue !== undefined && defaultOptionLabel !== undefined) {
      return [{ value: defaultOptionValue, label: defaultOptionLabel }];
    }
    return empty;
  }, [records, labelKey, valueKey, defaultOptionValue, defaultOptionLabel, formatOptionRef]);

  lenRef.current = records.length;

  const onFetch = useDebounceFn(async () => {
    if ((disableCache ? false : lenRef.current) || typeof onLoadRef.current !== 'function') {
      return;
    }

    try {
      setStatus('loading');
      const res = await onLoadRef.current();
      const records = (res as { records: T[] })?.records;
      let list: T[] = [];
      if (records) {
        list = records;
      }

      if (Array.isArray(res)) {
        list = res;
      }
      hasFetched.current = true;
      setRecords(list);
      setStatus('ok');
    } catch (err) {
      console.error(err);
      messageError(err, '获取列表失败，请稍候重试');
      setStatus('error');
    }
  }, 0);

  return <Select loading={status === 'loading'} onOpenChange={onFetch} options={options} {...selectProps} />;
}

/** 需要先加载异步数据的选择器 */
export const AsyncSelect = memo(AsyncSelectInner);
