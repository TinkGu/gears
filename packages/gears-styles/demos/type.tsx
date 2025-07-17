/**
 * iframe: true
 */
import classnames from 'classnames/bind';
import Badge from './badge';
import styles from './antd.scss';

const cx = classnames.bind(styles);

export default () => {
  return (
    <article>
      <Badge name="g-dark, g-dark-txt" />
      <p className={cx('g-dark')}>置灰、不重要的内容</p>
      <br />
      <Badge name="g-active, g-active-txt" />
      <p className={cx('g-active')}>高亮文本</p>
      <br />
      <Badge name="g-link, g-action-option" />
      <p className={cx('g-link')}>链接、文字按钮</p>
      <p className={cx('g-link', 'disabled')}>链接不可用</p>
      <br />
      <Badge name="g-hover-link" />
      <p className={cx('g-hover-link')}>hover 上去才高亮的文本</p>
    </article>
  );
};
