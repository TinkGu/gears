import { Form, Input } from 'antd';
import { required, numberRule } from '@tinks/gears-antd';
import { DemoForm } from './common-form';

export default () => {
  return (
    <DemoForm>
      <Form.Item name="sales" label="数量" rules={[required, numberRule({ min: 2, max: 10 })]}>
        <Input placeholder="请输入数量" />
      </Form.Item>
    </DemoForm>
  );
};
