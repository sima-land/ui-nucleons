import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './layout.m.css';

export interface ContainerProps {
  children?: ReactNode;
}

const cx = classNames.bind(styles);

export function Container({ children }: ContainerProps) {
  return <div className={cx('container')}>{children}</div>;
}

export function Header({ title, children }: ContainerProps & { title?: string }) {
  return (
    <header className={cx('header')}>
      {title && <h1 className={cx('title')}>UI-nucleons</h1>}
      {children}
    </header>
  );
}

export function Main({ children }: ContainerProps) {
  return <main className={cx('main')}>{children}</main>;
}

export function Aside({ children }: ContainerProps) {
  return <aside className={cx('aside')}>{children}</aside>;
}

export function Article({ children }: ContainerProps) {
  return <article className={cx('article')}>{children}</article>;
}
