import React from 'react';
import classnames from 'classnames/bind';
import { identity } from 'lodash';
import { prop } from 'lodash/fp';
import styles from './tabs.scss';

const cx = classnames.bind(styles);

/**
 * Компонент списка табов.
 * @param props Свойства компонента.
 * @param props.items Список табов.
 * @param props.getItemName Функция получения имени для отрисовки элемента.
 * @param props.onSelectItem Функция, вызываемая при выборе элемента списка.
 * @param props.isSelectedItem Функция, определяющая, является ли элемент выбранным.
 * @param props.isDisabledItem Функция, определяющая, является ли элемент невыбираемым.
 * @param props.type Тип таба.
 * @param props.underline Нужно ли подчеркивание группы табов.
 * @param props.stretch Необходимо ли растягивать табы под размер контейнера.
 * @param props.gapSize Размер отступа между табами.
 * @param props.className Внешние классы.
 * @return Элемент.
 */
export function Tabs <T = any> ({
  items,
  getItemName = identity,
  onSelectItem,
  isSelectedItem = prop('active'),
  isDisabledItem = prop('disabled'),
  view = 'clean',
  underline = false,
  stretch = false,
  gapSize = 'm',
  className,
  'data-testid': dataTestId = 'tabs',
}: { items?: T[] } & {
  getItemName?: (i: T) => string
  onSelectItem?: (i: T) => void
  isSelectedItem?: (i: T) => boolean | undefined
  isDisabledItem?: (i: T) => boolean | undefined
  view?: 'clean' | 'round'
  underline?: boolean
  stretch?: boolean
  gapSize?: 's' | 'm'
  className?: string
  'data-testid'?: string
}) {
  return (
    <ul
      data-testid={dataTestId}
      className={cx(
        'root',
        `view-${view}`,
        `gap-${gapSize}`,
        {
          underline,
          stretch,
        },
        className
      )}
    >
      {items?.map((item, index) => (
        <li
          key={index}
          onClick={() => onSelectItem?.(item)}
          className={cx(
            'tab-item',
            {
              selected: isSelectedItem(item),
              disabled: isDisabledItem(item),
            }
          )}
          data-testid='tab'
        >
          {getItemName(item)}
        </li>
      ))}
    </ul>
  );
}
