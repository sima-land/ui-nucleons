import classnames from 'classnames/bind';
import classes from './borders.module.scss';

const cx = classnames.bind(classes);

export const InnerBorder = {
  y: cx('inner-border-y'),
  top: cx('inner-border-top'),
  bottom: cx('inner-border-bottom'),
};
