import React from 'react';
import classnames from 'classnames/bind';
import styles from './tabs.scss';
import Type from 'prop-types';
import identity from 'lodash/identity';
import prop from 'lodash/fp/prop';

const cx = classnames.bind(styles);

/**
 * Компонент списка табов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список табов.
 * @param {Function} [props.getItemName=identity] Функция получения имени для отрисовки элемента.
 * @param {Function} [props.onSelectItem] Функция, вызываемая при выборе элемента списка.
 * @param {Function} [props.isSelectedItem=prop('active')] Функция, определяющая, является ли элемент выбранным.
 * @param {Function} [props.isDisabledItem=prop('disabled')] Функция, определяющая, является ли элемент невыбираемым.
 * @param {'text'|'round'} [props.type='text'] Тип таба.
 * @param {boolean} [props.underline=false] Нужно ли подчеркивание группы табов.
 * @param {boolean} [props.stretch=false] Необходимо ли растягивать табы под размер контейнера.
 * @param {'s'|'m'} [props.gapSize='m'] Размер отступа между табами.
 * @param {string} [props.className] Внешние классы.
 * @return {ReactElement} Элемент табов.
 */
const Tabs = ({
  items,
  getItemName = identity,
  onSelectItem,
  isSelectedItem = prop('active'),
  isDisabledItem = prop('disabled'),
  type = 'text',
  underline = false,
  stretch = false,
  gapSize = 'm',
  className,
}) => (
  <ul className={cx(
    'tabs-list',
    `type-${type}`,
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
            selected: isSelectedItem?.(item),
            disabled: isDisabledItem?.(item),
          }
        )}
      >
        {getItemName?.(item)}
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  items: Type.array,
  onSelectItem: Type.func,
  getItemName: Type.func,
  isSelectedItem: Type.func,
  isDisabledItem: Type.func,
  type: Type.oneOf(['text', 'round']),
  underline: Type.bool,
  stretch: Type.bool,
  gapSize: Type.oneOf(['s', 'm']),
  className: Type.string,
};

export default Tabs;
