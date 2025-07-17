import { Component } from 'react';
import type { FunctionComponent } from 'react';

const noop = () => null;
const safeJsonStringify = (x: any) => {
  try {
    return JSON.stringify(x);
  } catch (_) {
    return '';
  }
};

type LazyComponent = () => AnyPromise;

export interface AsyncComponentOptions {
  /** 主体组件 */
  component: LazyComponent;
  /** loading 渲染的组件 */
  loading?: FunctionComponent;
  /** 组件加载失败显示的组件 */
  fallback?: FunctionComponent<{ errmsg?: string }>;
}

/**
 * 异步引入组件
 */
function asyncImport(component: LazyComponent) {
  return component().then((res) => res.default);
}

/**
 * 延迟加载组件
 */
export function asyncComponent(options: AsyncComponentOptions) {
  const { loading: Loading = noop, component, fallback: Fallback = noop } = options || {};

  let theAsyncComponent: Promise<FunctionComponent>;

  return class PLoader extends Component<
    any,
    {
      BodyComponent: FunctionComponent;
      isLoading: boolean;
      error: boolean;
      errorInfo: string;
    }
  > {
    constructor(props: any) {
      super(props);
      theAsyncComponent = asyncImport(component);
      this.state = {
        BodyComponent: noop,
        isLoading: true,
        error: false,
        errorInfo: '',
      };
    }

    async componentDidMount() {
      try {
        const BodyComponent = await theAsyncComponent;
        this.setState({
          BodyComponent,
        });
      } catch (err) {
        console.error((err as any).stack);
        this.setState({
          error: true,
          errorInfo: safeJsonStringify((err as any).message || '哦，出错了！'),
        });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }

    /** 错误边界 */
    static getDerivedStateFromError(err: Error) {
      return {
        error: true,
        errorInfo: err?.message || '哦，出错了！',
      };
    }

    render() {
      const { isLoading, BodyComponent, error, errorInfo } = this.state;
      if (isLoading) {
        return <Loading />;
      }

      if (error) {
        return <Fallback errmsg={errorInfo} />;
      }
      return <BodyComponent {...this.props} />;
    }
  };
}
