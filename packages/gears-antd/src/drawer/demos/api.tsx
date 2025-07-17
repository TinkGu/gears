export type PortalFcChildren = (onDestroy: () => void) => React.ReactNode;
export type PortalChildren = React.ReactNode | PortalFcChildren;
export type BasePortalProps = {
  /** children */
  children?: PortalChildren;
  /** 销毁时触发 */
  onDestroy?: () => void;
};

export type PortalProps = BasePortalProps & {
  /** 抽屉内容 */
  content?: PortalChildren;
};

export default (_: PortalProps) => {
  /** do nothing */
};
