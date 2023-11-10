import { Children, FC, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';
import classnames from 'classnames/bind';
import classes from './field-grid.module.scss';
import { TextFieldProps } from '../text-field';

type ItOrArray<T> = T[] | T;

type CellSize = 'full' | 'half' | 'third';

interface CommonCellProps {
  size?: CellSize;
  rounds?: TextFieldProps['rounds'];
}

type OnlyOneRequired<T, K extends keyof T = keyof T> = {
  [key in K]?: Required<Pick<T, key>> & Partial<Record<Exclude<K, key>, undefined>>;
}[K];

/** @deprecated */
export type CellProps = CommonCellProps &
  OnlyOneRequired<{
    field: ReactElement<Pick<TextFieldProps, 'rounds' | 'caption' | 'classes' | 'className'>>;
    renderField: (props: Pick<TextFieldProps, 'rounds' | 'caption'>) => ReactNode;
  }>;

/** @deprecated */
export interface RowProps {
  isFirst?: boolean;
  isLast?: boolean;
  children: ItOrArray<ReactElement<CellProps, typeof Cell>>;
}

/** @deprecated */
export interface FieldGridProps {
  /** Содержимое. */
  children: ItOrArray<ReactElement<RowProps, typeof Row>>;

  /** Свойства корневого элемента. */
  rootProps?: HTMLAttributes<HTMLDivElement>;
}

/** @deprecated */
export interface FieldGridComponent extends FC<FieldGridProps> {
  Row: typeof Row;
  Cell: typeof Cell;
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
 * Сетка полей.
 * @deprecated В макетах больше не используются "склеивания" полей.
 * @param props Свойства.
 * @param props.children Содержимое, дочерними элементами могут быть только FieldGrid.Row.
 * @param props.rootProps Свойства корневого элемента.
 * @return Элемент.
 */
export const FieldGrid: FieldGridComponent = ({ children, rootProps }) => {
  const rows = Children.toArray(children).filter(TypeCheck.isRow) as ReactElement<RowProps>[];

  return (
    <div {...rootProps} className={cx('container', rootProps?.className)}>
      {rows.map((row, index) =>
        cloneElement(row, {
          isFirst: index === 0,
          isLast: index === rows.length - 1,
        }),
      )}
    </div>
  );
};

/**
 * Ряда для сетки полей. Может быть использован только как дочерний для FieldGrid.
 * @param props Свойства.
 * @param props.children Содержимое, дочерними элементами могут быть только FieldGrid.Cell.
 * @param props.isFirst Является ли ряд первым (будет задан автоматически).
 * @param props.isLast Является ли ряд последним (будет задан автоматически).
 * @return Элемент.
 * @deprecated
 */
const Row: FC<RowProps> = ({ isFirst: isFirstRow, isLast: isLastRow, children }) => {
  const cells = Children.toArray(children)
    .filter(TypeCheck.isCell)
    .slice(0, 3) as ReactElement<CellProps>[];

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
 * Элемент для сетки полей. Может быть использован только как дочерний для FieldGrid.Row.
 * @param props Свойства.
 * @param props.size Размер ячейки по горизонтали (будет задан автоматически).
 * @param props.rounds Скругления для поля (будет задан автоматически).
 * @param props.field Поле.
 * @param props.renderField Должна вернуть поле получив свойства для него.
 * @return Элемент.
 * @deprecated
 */
const Cell: FC<CellProps> = ({ size, rounds, field, renderField }) => {
  let content: ReactNode;

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

  return <div className={cx('cell', `size-${size}`)}>{content}</div>;
};

FieldGrid.Row = Row;
FieldGrid.Cell = Cell;
