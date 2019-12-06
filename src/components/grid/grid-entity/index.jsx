import React from 'react';
import Type from 'prop-types';

/**
 * Вспомогательный компонент для выведения элемента сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {*} [props.children] Содержимое.
 * @param {Function} [props.createClasses] Функция формирования классов.
 * @return {ReactElement} Вспомогательный компонент для выведения элемента сетки.
 */
const GridEntity = ({ tag, children, createClasses, ...restProps }) => {
  const Tag = tag && typeof tag === 'string' ? tag : 'div';
  return (
    <Tag className={typeof createClasses === 'function' ? createClasses(restProps) : null}>
      {children}
    </Tag>
  );
};

GridEntity.propTypes = {
  /**
   * HTML-tag.
   */
  tag: Type.string,

  /**
   * Содержимое.
   */
  children: Type.any,

  /**
   * Функция формирования классов.
   */
  createClasses: Type.func,
};

export default GridEntity;
