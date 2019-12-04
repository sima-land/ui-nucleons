import React from 'react';
import composeClasses from '../helpers/compose-classes';
import classnames from 'classnames/bind';
import styles from './tabs.scss';
import isFunction from 'lodash/isFunction';
import Type from 'prop-types';

const cx = classnames.bind(styles);
const DEFAULT_CLASSES = {
  itemsList: cx('tabs-list'),
  item: cx('tab-item'),
  selectedItem: cx('tab-item', 'tab-selected'),
};

/**
 * Компонент списка табов.
 * @param {Object} props Свойства компонента.
 * @param {Array} [props.items=[]] Массив табов.
 * @param {Object} [props.customClasses={}] Пользовательские классы.
 * @param {string} [props.customClasses.itemsList] Классы списка.
 * @param {string} [props.customClasses.item] Классы элемента списка.
 * @param {string} [props.customClasses.selectedItem] Классы выбранного элемента списка.
 * @param {Function} [props.onSelectItem] Функция, вызываемая при выборе элемента списка.
 * @param {Function} [props.renderItem=String] Функция отрисовки элемента.
 * @param {Function} [props.isSelectedItem] Функция, определяющая является ли элемент выбранным.
 * @return {ReactElement} Компонент табов.
 */
const Tabs = ({
  items = [],
  customClasses = {},
  onSelectItem,
  renderItem = String,
  isSelectedItem,
}) => {
  const newClasses = composeClasses({ defaultClasses: DEFAULT_CLASSES, customClasses });
  const {
    itemsList: itemsListClasses,
    item: itemClasses,
    selectedItem: selectedItemClasses,
  } = newClasses;
  return (
    <ul className={itemsListClasses}>
      {Array.isArray(items) && items.map((item, index) => (
        <li
          key={index}
          onClick={() => isFunction(onSelectItem) && onSelectItem(item)}
          className={
            isFunction(isSelectedItem) && isSelectedItem(item)
              ? selectedItemClasses
              : itemClasses
          }
        >
          {isFunction(renderItem) && renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  /**
   * Массив табов.
   */
  items: Type.array,

  /**
   * Пользовательские классы.
   */
  customClasses: Type.shape({
    /**
     * Классы списка.
     */
    itemsList: Type.string,

    /**
     * Классы элемента списка.
     */
    item: Type.string,

    /**
     * Классы выбранного элемента списка.
     */
    selectedItem: Type.string,
  }),

  /**
   * Функция, вызываемая при выборе элемента списка.
   */
  onSelectItem: Type.func,

  /**
   * Функция отрисовки элемента.
   */
  renderItem: Type.func,

  /**
   * Функция, определяющая является ли элемент выбранным.
   */
  isSelectedItem: Type.func,
};

export default Tabs;
