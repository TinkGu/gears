/**
 * iframe: 1080px
 */
import { Form, Input, Select } from 'antd';
import classnames from 'classnames/bind';
import Badge from './badge';
import styles from './antd.scss';

const cx = classnames.bind(styles);
const FormItem = Form.Item;
const mockOptions = [{ label: 'London', value: 1 }];

export default () => {
  const [form] = Form.useForm();
  return (
    <article>
      <div className={cx('g-form-title')}>表单排版</div>
      <br />
      <div className={cx('g-form-title', 'sm')}>表单小标题</div>
      <div className={cx('g-dark')}>
        <p>
          表单或者任意某块内容顶部的标题，都可以使用
          <Badge name="g-form-title" bordered={false} />
        </p>
        <p>
          偶尔需要较小一号的字体，表示次级标题，则使用
          <Badge name="g-form-title sm" bordered={false} />
        </p>
      </div>
      <Form form={form}>
        <div className={cx('g-form-title', 'sm')}>控件长度</div>
        <div className={cx('g-dark')}>
          <p>预设了几种输入框长度，支持 Input、Textarea、Select 等场景的表单控件</p>
        </div>
        <Badge name="g-input-sm" />
        <FormItem name="item-1" label="超小输入框">
          <Input className="g-input-sm" />
        </FormItem>
        <Badge name="g-input-s" />
        <FormItem name="item-1" label="小型输入框">
          <Input className="g-input-s" />
        </FormItem>
        <Badge name="g-input-m" />
        <FormItem name="item-2" label="中型输入框">
          <Select className="g-input-m" options={mockOptions} />
        </FormItem>
        <Badge name="g-input-l" />
        <FormItem name="state" label="大型输入框">
          <Input.TextArea className="g-input-l" rows={5} maxLength={100} />
        </FormItem>
        <Badge name="g-input-xl" />
        <FormItem name="state" label="超大输入框">
          <Input.TextArea className="g-input-xl" rows={5} maxLength={100} />
        </FormItem>
      </Form>
    </article>
  );
};
