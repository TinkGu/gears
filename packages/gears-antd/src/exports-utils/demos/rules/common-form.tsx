import React from 'react';
import { Form, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { globalFormConfig, commonFormLayout, FormBtns } from '@tinks/gears-antd';

export function DemoForm({ children }: { children: React.ReactNode }) {
  const [form] = Form.useForm();
  return (
    <ConfigProvider locale={zhCN} form={globalFormConfig}>
      <Form form={form} {...commonFormLayout}>
        {children}
      </Form>
      <FormBtns form={form} onOk={() => void 0} />
    </ConfigProvider>
  );
}
