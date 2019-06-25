import React from 'react';
import styles from './grid-row.scss';
import classNames from 'classnames';
import Type from 'prop-types';

/**
 * Компонент строки сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {string} [props.gutter=l] Размер отступов между строками.
 * @param {string} [props.alignment=stretch] Выравнивание строк внутри flex-контейнера.
 * @param {Object} [props.children] Содержимое строки. Элементы <GridCol />.
 * @return {ReactElement} Строка сетки.
 */
const GridRow = ({
  tag,
  externalClass,
  gutter = 'l',
  alignment,
  children,
}) => {
  const Tag = tag && typeof tag === 'string' ? tag : 'div';
  return (
    <Tag className={classNames(
      styles.container,
      externalClass,
      styles[`gutter-${gutter}`],
      styles[`content-${alignment}`]
    )}
    >
      {children}
    </Tag>
  );
};

GridRow.propTypes = {
  /**
   * HTML-tag.
   */
  tag: Type.string,
  /**
   * Дополнительный класс стилизации.
   */
  externalClass: Type.string,
  /**
   * Размер отступов между строками.
   */
  gutter: Type.oneOf(['s', 'm', 'l', 'zero']),
  /**
   * Выравнивание строк внутри flex-контейнера.
   */
  alignment: Type.oneOf(['start', 'end', 'between', 'around', 'center']),
  /**
   * Содержимое строки. Элементы <GridCol />.
   */
  children: Type.object,
};

export default GridRow;
