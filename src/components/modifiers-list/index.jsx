import React from 'react';
import Type from 'prop-types';
import ModifierItem from './modifier-item/';
import Link from '../link';
import Icon from '../icon';
import statement from '../icons/statement.svg';
import classes from './modifiers-list.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

/**
 * Компонент списка модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Массив данных модификаторов.
 * @param {string} props.currencyGrapheme Графема валюты пользователя.
 * @param {string} props.sizesTableUrl Url таблицы размеров.
 * @param {Object} props.wrapperProps Свойства блока-обертки.
 * @param {Object} props.itemsContainerProps Свойства блока-обертки списка модификаторов.
 * @return {ReactElement} Компонент списка модификаторов.
 */
const ModifiersList = ({ items, currencyGrapheme, sizesTableUrl, wrapperProps, itemsContainerProps }) => (
  <div {...wrapperProps}>
    {sizesTableUrl && (
      <div className={cx('sizes-table-wrapper')}>
        <Link
          className={cx('sizes-table-link')}
          href={sizesTableUrl}
          external
        >
          Таблица размеров
          <Icon
            inline
            icon={statement}
            role='presentation'
            size={24}
            className={cx('sizes-table-icon')}
          />
        </Link>
      </div>
    )}
    {Array.isArray(items) && (
      <div {...itemsContainerProps}>
        {items.map((item, index) => (
          <ModifierItem
            key={index}
            {...item}
            currencyGrapheme={currencyGrapheme}
          />
        ))}
      </div>
    )}
  </div>
);

ModifiersList.propTypes = {

  /**
   * Массив данных модификаторов.
   */
  items: Type.array,

  /**
   * Графема валюты пользователя.
   */
  currencyGrapheme: Type.string,

  /**
   * Url таблицы размеров.
   */
  sizesTableUrl: Type.string,

  /**
   * Свойства блока-обертки.
   */
  wrapperProps: Type.object,

  /**
   * Свойства блока-обертки списка модификаторов.
   */
  itemsContainerProps: Type.object,
};

export default ModifiersList;
