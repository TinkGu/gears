import { SetStateAction, useRef, useCallback, useState } from 'react';
import { useMemoizedFn } from './use-memoized-fn';

/** 传入的数据 */
type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
};

/** useUpdate 会返回一个函数，调用该函数会强制组件重新渲染。 */
export const useUpdate = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

/**
 *
 * @param options
 * @returns
 */
export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue);
  if (value !== undefined) {
    stateRef.current = value;
  }

  // 在这里使用useMemoizedFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化
  const setState = useMemoizedFn((v: SetStateAction<T>, forceTrigger = false) => {
    // `forceTrigger`会触发`onChange` 即使 `v` 和 `stateRef.current`一样
    const nextValue = typeof v === 'function' ? (v as (prevState: T) => T)(stateRef.current) : v;
    // 判断是否相同
    if (!forceTrigger && nextValue === stateRef.current) return;
    // 获取最新的数据
    stateRef.current = nextValue;
    // 强制组件重新渲染
    update();
    return onChange?.(nextValue);
  });
  // 返回最新的数据
  return [stateRef.current, setState] as const;
}
