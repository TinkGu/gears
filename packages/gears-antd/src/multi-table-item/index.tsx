import React from 'react';

interface MultiTableItemProps<T> {
  /** 必传，数据源 */
  list?: T[];
  /** 展示数据源中某项的指定字段，仅当数组元素为object时适用 */
  name?: string;
  /** 自定义渲染 */
  render?: (item: T) => React.ReactNode;
}

/** 表格中，若要展示多个内容时，仅展示其中第一个 */
export function MultiTableItem<T = any>({ list, name, render }: MultiTableItemProps<T>) {
  const length = list?.length;
  if (!length) {
    return null;
  }
  let desc: React.ReactNode = null;

  if (typeof list?.[0] === 'string') {
    desc = list?.[0];
  } else if (typeof list?.[0] === 'object' && name) {
    desc = (list?.[0] as any)?.[name] || '';
  }
  if (typeof render === 'function') {
    desc = list?.[0] ? render(list[0]) : null;
  }
  return (
    <>
      <span title={typeof desc === 'string' ? desc : ''}>{desc}</span>
      {length > 1 && <span className="g-dark-txt">{`等共${length}个`}</span>}
    </>
  );
}
