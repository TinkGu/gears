/**
 * defaultShowCode: true
 */
import { Button } from 'antd';
import { PageHeader } from '@tinks/gears-antd';

export default () => {
  return (
    <>
      <PageHeader title="标题" bordered>
        <Button type="primary">操作按钮</Button>
      </PageHeader>
      <div>主体内容。</div>
    </>
  );
};
