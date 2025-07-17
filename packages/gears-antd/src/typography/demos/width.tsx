/**
 * defaultShowCode: true
 */
import { LabelRow, Label } from '@tinks/gears-antd';

export default () => {
  return (
    <LabelRow>
      <Label label="姓名" width="260px">
        张三丰
      </Label>
      <Label label="年龄">18</Label>
    </LabelRow>
  );
};
