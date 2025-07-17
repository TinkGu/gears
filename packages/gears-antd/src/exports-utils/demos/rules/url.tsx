import { Form, Input } from 'antd';
import { urlRule } from '@tinks/gears-antd';
import { trim } from '@tinks/xeno';
import { DemoForm } from './common-form';

export default () => {
  return (
    <DemoForm>
      <Form.Item name="url" label="链接" rules={[urlRule()]} normalize={trim}>
        <Input placeholder="支持 http/https 开头的链接" />
      </Form.Item>
      <Form.Item name="url2" label="https 链接" rules={[urlRule({ httpsOnly: true })]} normalize={trim}>
        <Input placeholder="只支持 https 开头的链接" />
      </Form.Item>
      <Form.Item
        name="url3"
        label="指定域名"
        rules={[urlRule({ domains: ['https://m.google.com', '//pages.google.com', 'http://www.google.com/youtube'] })]}
        normalize={trim}
      >
        <Input placeholder="请输入指定的链接" />
      </Form.Item>
    </DemoForm>
  );
};
