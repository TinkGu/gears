/**
 * defaultShowCode: true
 */
import { MultiTableItem } from '@tinks/gears-antd';

const list = [1, 2, 3, 4, 5];
const renderTableItem = (i: number) => `item${i}`;

export default () => {
  return (
    <div>
      <MultiTableItem list={list} render={renderTableItem} />
    </div>
  );
};
