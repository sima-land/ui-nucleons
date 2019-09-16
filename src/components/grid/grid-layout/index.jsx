import React from 'react';
import styles from './layout.scss';
import Type from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Обертка для общего контейнера.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @return {ReactElement} Компонент-обертка.
 */
const GridLayout = ({ tag: Tag = 'div', children, containerProps }) => {
  const { className: containerClassName } = containerProps || {};
  return (
    <Tag
      {...containerProps}
      className={cx('layout', containerClassName)}
    >
      {children}
    </Tag>
  );
};

GridLayout.propTypes = {
  /**
   * Содержимое компонента.
   */
  tag: Type.string,
  children: Type.any,
  containerProps: Type.object,
};

export default GridLayout;
