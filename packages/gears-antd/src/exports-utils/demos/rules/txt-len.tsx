import { Form, Input } from 'antd';
import { txtLenRule } from '@tinks/gears-antd';
import { trim } from '@tinks/xeno';
import { DemoForm } from './common-form';

export default () => {
  return (
    <DemoForm>
      <Form.Item name="title" label="标题" rules={[txtLenRule(10)]} normalize={trim}>
        <Input placeholder="最多 10 个字" />
      </Form.Item>
      <Form.Item name="desc" label="描述" rules={[txtLenRule({ min: 6, max: 15 })]} normalize={trim}>
        <Input placeholder="最少 6 个字，最多 15 个字" />
      </Form.Item>
    </DemoForm>
  );
};
