import React from 'react';
import range from 'lodash.range';
import styles from './grid-row.scss';
import classNames from 'classnames';
import Type from 'prop-types';

/**
 * Компонент строки сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {string} [props.gutter=l] Размер отступов между строками.
 * @param {number} [props.columns=3] Количество колонок от 1 до 12.
 * @param {string} [props.alignment=stretch] Выравнивание строк внутри flex-контейнера.
 * @return {ReactElement} Строка сетки.
 */
const GridRow = ({
  tag,
  externalClass,
  gutter = 'l',
  columns = 3,
  alignment,
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
      {range(0, columns, 1).map(number => (
        // Пока заглушка. Отдельной задачей будет реализован компонент колонки
        <div
          key={number}
          style={{
            backgroundColor: '#1f84db',
            width: '100%',
            height: '30px',
          }}
        />
      ))}
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
   * Количество колонок от 1 до 12.
   */
  columns: Type.number,
  /**
   * Выравнивание строк внутри flex-контейнера.
   */
  alignment: Type.oneOf(['start', 'end', 'between', 'around', 'center']),
};

export default GridRow;
