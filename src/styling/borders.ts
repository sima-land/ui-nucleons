import classnames from 'classnames/bind';
import classes from './borders.m.scss';

const cx = classnames.bind(classes);

/** @deprecated */
export const InnerBorder = {
  y: cx('inner-border-y'),
  top: cx('inner-border-top'),
  bottom: cx('inner-border-bottom'),
};
