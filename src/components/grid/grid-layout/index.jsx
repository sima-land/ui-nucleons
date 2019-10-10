import React from 'react';
import styles from './layout.scss';
import Type from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * Обертка для общего контейнера.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {string} [props.containerTag='div'] Имя элемента-контейнера.
 * @param {Object} [props.containerProps] Свойства контейнера.
 * @return {ReactElement} Компонент-обертка.
 */
const GridLayout = ({
  containerTag: Container = 'div',
  containerProps,
  children,
}) => {
  const { className } = containerProps || {};

  return (
    <div className={cx('layout-wrapper')}>
      <Container
        {...containerProps}
        className={cx('layout', className)}
        children={children}
      />
    </div>
  );
};

GridLayout.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,

  /**
   * HTML-tag контейнера.
   */
  containerTag: Type.string,

  /**
   * Свойства контейнера.
   */
  containerProps: Type.object,
};

export default GridLayout;
