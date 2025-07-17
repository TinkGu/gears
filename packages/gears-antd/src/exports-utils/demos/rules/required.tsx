import { Form, Input } from 'antd';
import { required } from '@tinks/gears-antd';
import { trim } from '@tinks/xeno';
import { DemoForm } from './common-form';

export default () => {
  return (
    <DemoForm>
      <Form.Item name="title" label="标题" rules={[required]} normalize={trim}>
        <Input placeholder="请输入标题" />
      </Form.Item>
    </DemoForm>
  );
};
