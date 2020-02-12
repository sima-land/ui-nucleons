import React from 'react';
import Type from 'prop-types';
import ModifierItem from './modifier-item/';

/**
 * Компонент списка модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Массив данных модификаторов.
 * @param {string} props.currencyGrapheme Графема валюты пользователя.
 * @return {ReactElement} Компонент списка модификаторов.
 */
const ModifiersList = ({ items, currencyGrapheme }) => (
  <div>
    {Array.isArray(items) && items.map((item, index) => (
      <ModifierItem
        key={index}
        {...item}
        currencyGrapheme={currencyGrapheme}
      />
    ))}
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
};

export default ModifiersList;
