import React, { Children, cloneElement } from 'react';
import classnames from 'classnames/bind';
import classes from './field-grid.scss';
import { Props as TextFieldProps } from '../text-field';

type ItOrArray<T> = T[] | T

type CellSize = 'full' | 'half' | 'third';

interface CommonCellProps {
  size?: CellSize
  rounds?: TextFieldProps['rounds']
}

type OnlyOneRequired<T, K extends keyof T = keyof T> = {
  [key in K]?: Required<Pick<T, key>> & Partial<Record<Exclude<K, key>, undefined>>
}[K]

export type CellProps = CommonCellProps & OnlyOneRequired<{
  field: React.ReactElement<Pick<TextFieldProps, 'rounds' | 'caption' | 'classes' | 'className'>>,
  renderField: (props: Pick<TextFieldProps, 'rounds' | 'caption'>) => React.ReactNode
}>

export interface RowProps {
  isFirst?: boolean
  isLast?: boolean
  children: ItOrArray<React.ReactElement<CellProps, typeof Cell>>
}

export interface Props {
  children: ItOrArray<React.ReactElement<RowProps, typeof Row>>
  rootProps?: React.HTMLProps<HTMLDivElement>
}

interface GridComponent extends React.FC<Props> {
  Row: typeof Row
  Cell: typeof Cell
}

const cx = classnames.bind(classes);

const cellSizeByCount: Readonly<Record<number, CellSize>> = {
  1: 'full',
  2: 'half',
  3: 'third',
};

const TypeCheck = {
  isRow: (child: any) => child && child.type === Row,
  isCell: (child: any) => child && child.type === Cell,
};

/**
 * Компонент сетки полей.
 * @param props Свойства.
 * @param props.children Содержимое, дочерними элементами могут быть только FieldGrid.Row.
 * @param props.rootProps Свойства корневого элемента.
 * @return Компонент сетки полей.
 */
const FieldGrid: GridComponent = ({ children, rootProps }) => {
  const rows = Children.toArray(children).filter(TypeCheck.isRow) as React.ReactElement<RowProps>[];

  return (
    <div {...rootProps} className={cx('container', rootProps?.className)}>
      {rows.map((row, index) => cloneElement(row, {
        isFirst: index === 0,
        isLast: index === rows.length - 1,
      }))}
    </div>
  );
};

/**
 * Компонент ряда для сетки полей. Может быть использован только как дочерний для FieldGrid.
 * @param props Свойства.
 * @param props.children Содержимое, дочерними элементами могут быть только FieldGrid.Cell.
 * @param props.isFirst Является ли ряд первым (будет задан автоматически).
 * @param props.isLast Является ли ряд последним (будет задан автоматически).
 * @return Элемент.
 */
const Row: React.FC<RowProps> = ({ isFirst: isFirstRow, isLast: isLastRow, children }) => {
  const cells = Children.toArray(children)
    .filter(TypeCheck.isCell)
    .slice(0, 3) as React.ReactElement<CellProps>[];

  const cellSize = cellSizeByCount[cells.length];

  return (
    <>
      {cells.map((cell, index) => {
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

        return cloneElement(cell as any, { size: cellSize, rounds });
      })}
    </>
  );
};

/**
 * Компонент элемента для сетки полей. Может быть использован только как дочерний для FieldGrid.Row.
 * @param props Свойства.
 * @param props.size Размер ячейки по горизонтали (будет задан автоматически).
 * @param props.rounds Скругления для поля (будет задан автоматически).
 * @param props.field Поле.
 * @param props.renderField Должна вернуть поле получив свойства для него.
 * @return Компонент ряда для сетки полей.
 */
const Cell: React.FC<CellProps> = ({ size, rounds, field, renderField }) => {
  let content: React.ReactNode;

  if (renderField) {
    content = renderField({ rounds, caption: undefined });
  } else if (field) {
    content = cloneElement(field, {
      rounds,
      caption: undefined,
      classes: {
        ...field.props.classes,
        blockFocused: cx(field.props.classes?.blockFocused, 'focused-field'),
      },
      className: cx(field.props.className, 'size-full'),
    });
  }

  return (
    <div className={cx('cell', `size-${size}`)}>
      {content}
    </div>
  );
};

FieldGrid.Row = Row;
FieldGrid.Cell = Cell;

export default FieldGrid;
