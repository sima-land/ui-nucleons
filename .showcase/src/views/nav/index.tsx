import classNames from 'classnames/bind';
import styles from './nav.m.css';

const cx = classNames.bind(styles);

export function Nav({ children }: any) {
  return <ul className={cx('nav')}>{children}</ul>;
}

export function NavItem({ children, active }: any) {
  return <div className={cx('nav-item', { active })}>{children}</div>;
}

export function NavItemTitle({ children, ...rest }: any) {
  return (
    <div {...rest} className={cx('nav-item-title')}>
      {children}
    </div>
  );
}

export function NavItemBody({ children }: any) {
  return <div className={cx('nav-item-body')}>{children}</div>;
}
