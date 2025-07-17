/**
 * defaultShowCode: true
 */
import { MultiTableItem } from '@tinks/gears-antd';

const list = [
  { title: '清风', key: 1 },
  { title: '明月', key: 2 },
  { title: '春华', key: 3 },
  { title: '秋实', key: 4 },
];

export default () => {
  return (
    <div>
      <MultiTableItem list={list} name="title" />
    </div>
  );
};
