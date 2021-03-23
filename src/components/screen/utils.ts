import classnames from 'classnames/bind';
import classes from './screen.scss';

export type OrNil<T> = T | null | undefined

export const cx = classnames.bind(classes);
