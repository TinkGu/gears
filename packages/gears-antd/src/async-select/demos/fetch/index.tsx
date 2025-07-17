/**
 * defaultShowCode: true
 * title: 远程数据
 * desc: 使用 setTimeout 来模拟远程请求返回 Promise
 */
import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { AsyncSelect } from '@tinks/gears-antd';

interface Hero {
  name: string;
  id: string;
}

export default () => {
  const [hero, setHero] = useState<Hero>({} as Hero);
  const [form] = Form.useForm();

  useEffect(() => {
    /** 假设现在是一个选择人物的界面，当前后端记录的英雄是 */
    function getSavedDataFromServer() {
      setHero({ name: '皮卡丘', id: '1' });
      form.setFieldsValue({ id: '1' });
    }
    getSavedDataFromServer();
  }, [form]);

  function onLoadFn() {
    return new Promise<Hero[]>((resolve) =>
      setTimeout(() => {
        resolve([
          { id: '1', name: '皮卡丘' },
          { id: '2', name: '马里奥' },
          { id: '3', name: '卡比' },
        ]);
      }, 1000),
    );
  }

  return (
    <Form form={form}>
      <Form.Item name="id" label="选择角色">
        <AsyncSelect
          className="g-input-l"
          onLoad={onLoadFn}
          labelKey="name"
          valueKey="id"
          defaultOptionLabel={hero.name}
          defaultOptionValue={hero.id}
        />
      </Form.Item>
    </Form>
  );
};
