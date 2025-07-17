/**
 * defaultShowCode: true
 * mobile: true
 */
import { Button } from 'antd';
import { toast } from '@tinks/gears';
import { DemoBlock } from 'demo-helper';
import styles from './styles.module.scss';

export default () => {
  const onToastSingle = () => {
    toast({ message: '立志言为本，修身行乃先' });
  };

  const onToastSingleLongMsg = () => {
    toast({ message: '春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。' });
  };

  const onToastSingleNowrap = () => {
    toast({ message: '爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。', nowrap: true });
  };

  /** 一次展示多条信息， 可自动换行 */
  const onToastMulti = () => {
    toast({ message: ['爆竹声中一岁除', '春风送暖入屠苏', '千门万户曈曈日', '总把新桃换旧符'] });
  };

  /** 自定义渲染 */
  const onToastJsx = () => {
    toast({
      message: <div className={styles.scream}>啊</div>,
    });
  };

  const onToastTop = () => {
    toast({ message: '鹅，鹅，鹅，曲项向天歌', position: 'top' });
  };

  return (
    <div className={styles.container}>
      <DemoBlock top wrap title="单条消息">
        <Button onClick={onToastSingle}>单条短消息</Button>
        <Button onClick={onToastSingleLongMsg}>单条超长消息自动换行</Button>
        <Button onClick={onToastSingleNowrap}>单条超长消息单行显示，超出隐藏</Button>
      </DemoBlock>

      <DemoBlock wrap title="多条消息">
        <Button onClick={onToastMulti}>当时我就念了两句诗</Button>
      </DemoBlock>

      <DemoBlock wrap title="JSX 消息">
        <Button onClick={onToastJsx}>大声尖叫</Button>
      </DemoBlock>

      <DemoBlock wrap title="消息展示位置">
        <Button onClick={onToastSingle}>默认展示在页面中心</Button>
        <Button onClick={onToastTop}>上方显示</Button>
      </DemoBlock>
    </div>
  );
};
