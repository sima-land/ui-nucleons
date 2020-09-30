import React, { Children, cloneElement } from 'react';
import classnames from 'classnames/bind';
import classes from './field-grid.scss';
import PropTypes from 'prop-types';
import { SmallRounds } from '../styling/shapes';

const cx = classnames.bind(classes);

const cellSizeByCount = {
  1: 'full',
  2: 'half',
  3: 'third',
};

const TypeCheck = {
  isRow: child => child?.type === Row,
  isCell: child => child?.type === Cell,
};

/**
 * Компонент сетки полей.
 * @param {Object} props Свойства.
 * @param {ReactElement[]} props.children Содержимое, дочерними элементами могут быть только FieldGrid.Row.
 * @param {Object} props.rootProps Свойства корневого элемента.
 * @return {ReactElement} Компонент сетки полей.
 */
const FieldGrid = ({ children, rootProps }) => {
  const rows = Children.toArray(children).filter(TypeCheck.isRow);

  return (
    <div {...rootProps} className={cx('container', rootProps?.className)}>
      {rows.map((row, index) => cloneElement(row, {
        isFirst: index === 0,
        isLast: index === rows.length - 1,
      }))}
    </div>
  );
};

FieldGrid.propTypes = {
  rootProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

/**
 * Компонент ряда для сетки полей. Может быть использован только как дочерний для FieldGrid.
 * @param {Object} props Свойства.
 * @param {ReactElement[]} props.children Содержимое, дочерними элементами могут быть только FieldGrid.Cell.
 * @param {boolean} props.isFirst Является ли ряд первым (будет задан автоматически).
 * @param {boolean} props.isLast Является ли ряд последним (будет задан автоматически).
 * @return {ReactElement} Компонент ряда для сетки полей.
 */
const Row = ({ isFirst: isFirstRow, isLast: isLastRow, children }) => {
  const cells = Children.toArray(children)
    .filter(TypeCheck.isCell)
    .slice(0, 3);

  const cellSize = cellSizeByCount[cells.length];

  return cells.map((cell, index) => {
    const isFirstCell = index === 0;
    const isLastCell = index === cells.length - 1;

    let rounds = 'none';

    if (isFirstRow && isLastRow) {
      if (isFirstCell && isLastCell) {
        rounds = 'all';
      } else if (isFirstCell) {
        rounds = 'left';
      } else if (isLastCell) {
        rounds = 'right';
      }
    } else if (isFirstRow) {
      if (isFirstCell && isLastCell) {
        rounds = 'top';
      } else if (isFirstCell) {
        rounds = 'topLeft';
      } else if (isLastCell) {
        rounds = 'topRight';
      }
    } else if (isLastRow) {
      if (isFirstCell && isLastCell) {
        rounds = 'bottom';
      } else if (isFirstCell) {
        rounds = 'bottomLeft';
      } else if (isLastCell) {
        rounds = 'bottomRight';
      }
    }

    return cloneElement(cell, { size: cellSize, rounds });
  });
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

/**
 * Компонент элемента для сетки полей. Может быть использован только как дочерний для FieldGrid.Row.
 * @param {Object} props Свойства.
 * @param {string} props.size Размер ячейки по горизонтали (будет задан автоматически).
 * @param {string} props.rounds Скругления для поля (будет задан автоматически).
 * @param {ReactElement} props.field Поле.
 * @param {Function} props.renderField Должна вернуть поле получив свойства для него.
 * @return {ReactElement} Компонент ряда для сетки полей.
 */
const Cell = ({ size, rounds, field, renderField }) => {
  const content = renderField
    ? renderField({ rounds, caption: undefined })
    : cloneElement(field, {
      rounds,
      caption: undefined,
      classes: {
        ...field.props.classes,
        blockFocused: cx(field.props.classes?.blockFocused, 'focused-field'),
      },
      className: cx(field.props.className, 'size-full'),
    });

  return (
    <div className={cx('cell', `size-${size}`)}>
      {content}
    </div>
  );
};

Cell.propTypes = {
  field: PropTypes.node,
  renderField: PropTypes.func,
  rounds: PropTypes.oneOf([...Object.keys(SmallRounds), 'none']),
  size: PropTypes.oneOf(['full', 'half', 'third']),
};

FieldGrid.Row = Row;
FieldGrid.Cell = Cell;

export default FieldGrid;
