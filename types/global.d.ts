declare interface Window {
  process: any;
  NODE_ENV: any;
}
declare module '*.scss' {
  const styles: any;
  export default styles;
}

declare module '*.less' {
  const styles: any;
  export default styles;
}

declare type Primitive = bigint | boolean | null | number | string | symbol | undefined;

declare type PlainObject = {
  [key: string]: Primitive | PlainObject;
};

declare type JSONLike = Primitive | PlainObject | Array<Primitive | PlainObject> | { [key: string]: JSONLike } | Array<JSONLike>;

declare type ReactMouseEvent = React.MouseEvent<HTMLElement, MouseEvent>;

declare type AnyFunction = (...args: any[]) => any;
declare type AnyPromise = Promise<any>;
declare type RequestOrder = { asc: boolean; column: string };
