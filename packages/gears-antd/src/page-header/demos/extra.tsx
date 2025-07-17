/**
 * defaultShowCode: true
 */
import { Button, Space } from 'antd';
import { PageHeader } from '@tinks/gears-antd';

const spaceStyle = { marginTop: 60 };

export default () => {
  return (
    <>
      <PageHeader title="标题" bordered extra="展示额外的文案">
        <Button type="primary">操作按钮</Button>
      </PageHeader>

      <Space style={spaceStyle}> </Space>

      <PageHeader
        title="标题"
        bordered
        extra={
          <div>
            也可以完全重写，<Button>按钮</Button>
          </div>
        }
      >
        <Button type="primary">操作按钮</Button>
      </PageHeader>
    </>
  );
};
