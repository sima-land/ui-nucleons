import React from 'react';
import Type from 'prop-types';

/**
 * Элемент сетки с необходимыми классами.
 * @param {Function} createClasses Функция вычисления классов.
 * @return {Function} Функция, формирующая элемент сетки с необходимыми классами.
 */
export default createClasses => {
  /**
   * Элемент сетки.
   * @param {Object} props Свойства компонента.
   * @param {string} [props.tag=div] HTML-tag.
   * @param {*} [props.children] Содержимое.
   * @param {...*} restProps Остальные свойства.
   * @return {ReactComponent} Компонент сетки.
   */
  const Entity = ({ tag, children, ...restProps }) => {
    const Tag = tag && typeof tag === 'string' ? tag : 'div';
    return (
      <Tag className={createClasses(restProps)}>
        {children}
      </Tag>
    );
  };
  Entity.propTypes = {
    /**
     * HTML-tag.
     */
    tag: Type.string,
    /**
     * Содержимое.
     */
    children: Type.any,
  };
  return Entity;
};

