/**
 * defaultShowCode: true
 */
import { MultiTableItem } from '@tinks/gears-antd';

const list = ['清风', '明月', '春华', '秋实'];

export default () => {
  return (
    <div>
      <MultiTableItem list={list} />
    </div>
  );
};
