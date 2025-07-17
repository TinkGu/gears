import { useRef, useMemo } from 'react';

type NoopFn = (this: any, ...args: any[]) => any;

type PickFunction<T extends NoopFn> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;

/**
 * 持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback。
 * 在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。
 * 使用 useMemoizedFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化。
 * @param fn
 * @returns
 */
export function useMemoizedFn<T extends NoopFn>(fn: T) {
  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<T>>();

  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}
