/**
 * defaultShowCode: true
 * title: 应用场景
 * desc: 配合form使用时，会自带form的检验表单数据的能力
 */
import { message, Form, Input } from 'antd';
import { FormBtns } from '@tinks/gears-antd';

const { Item } = Form;
const style = { width: 400 };

export default () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form}>
        <Item label="必选" name="name" style={style} rules={[{ required: true, message: 'name 字段为必填项' }]}>
          <Input />
        </Item>
      </Form>
      <FormBtns
        form={form}
        onOk={() => {
          message.success('提交成功');
        }}
      />
    </>
  );
};
