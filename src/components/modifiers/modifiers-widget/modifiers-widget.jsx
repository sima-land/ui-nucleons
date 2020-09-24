import React from 'react';
import getDeclination from '../../helpers/get-declination';
import ModifiersGroup from '../modifiers-group/modifiers-group';
import prop from 'lodash/fp/prop';
import Link from '../../link/deprecated';
import classNames from 'classnames/bind';
import styles from '../modifiers.scss';
import isFunction from 'lodash/isFunction';
import Type from 'prop-types';

const cx = classNames.bind(styles);

/**
 * Функция-геттер для обработчика клика по модификатору.
 * @param {Function} onSelectItem Функция сменяющая модификатор.
 * @param {Object} item Модификатор.
 * @return {Function} Обработчик клика по модификатору.
 */
export const getSelectItem = (onSelectItem, item) =>
  item.selected
    ? null
    : () => isFunction(onSelectItem) && onSelectItem(item);

/**
 * Компонент блока модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {string} props.title Название сущности модификатора.
 * @param {Array} props.items Данные модификатора товара.
 * @param {string} props.sizesTableUrl Url таблицы размеров.
 * @param {Function} props.onSelectItem Будет вызвана при выборе модификатора.
 * @return {ReactElement} Компонент блока модификаторов.
 */
const ModifiersWidget = ({ title, items, sizesTableUrl, onSelectItem }) => (
  <div>
    {title && (
      <h3 className={cx('modifiers-title')}>
        {title} ({items.length}&nbsp;
        {getDeclination(items.length, ['вариант', 'варианта', 'вариантов'])}):
      </h3>
    )}
    <ModifiersGroup
      items={items}
      getItemContent={prop('name')}
      getItemCount={prop('inCartQty')}
      onSelectItem={onSelectItem}
      getSelectItem={getSelectItem}
    />
    {Boolean(sizesTableUrl) && (
      <Link
        href={sizesTableUrl}
        className={cx('modifiers-link')}
        external
      >Таблица размеров</Link>
    )}
  </div>
);

ModifiersWidget.propTypes = {

  /**
   * Название сущности модификатора.
   */

  title: Type.string,

  /**
   * Данные модификатора товара.
   */
  items: Type.arrayOf(Type.object),

  /**
   * Url таблицы размеров.
   */
  sizesTableUrl: Type.string,

  /**
   * Обработчик клика по модификатору.
   */
  onSelectItem: Type.func,
};

export default ModifiersWidget;
