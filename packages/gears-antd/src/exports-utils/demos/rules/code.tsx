import { Form, Input } from 'antd';
import { codeRule } from '@tinks/gears-antd';
import { trim } from '@tinks/xeno';
import { DemoForm } from './common-form';

export default () => {
  return (
    <DemoForm>
      <Form.Item name="code" label="字符" rules={[codeRule()]} normalize={trim}>
        <Input placeholder="只支持大小写英文、数字、下划线、横杠和点，这样对 url encode 友好" />
      </Form.Item>
    </DemoForm>
  );
};
