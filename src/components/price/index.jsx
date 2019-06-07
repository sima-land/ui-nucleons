import React from 'react';
import { formatNumber } from '../helpers/format-number';
import Type from 'prop-types';
import './price.scss';
import classNames from 'classnames';

/**
 * Цена товара с указанием знака валюты.
 * @param {Object} props Параметры компонента.
 * @param {string} [props.className] Название класса.
 * @param {string} [props.currencyGrapheme] Графема валюты пользователя.
 * @param {number} props.value Цена.
 * @param {boolean} [props.withFractionalPart] Указать дробную часть.
 * @param {boolean} [props.beforePrice] Отобразить знак валюты перед ценой.
 * @param {boolean} [props.fractionalInSuper] Отображать дробную часть сверху.
 * @param {boolean} [props.boldIntegerPart] Отображать целую часть цены жирным начертанием.
 * @return {ReactElement} Цена товара с указанием знака валюты.
 */
const Price = ({
  className,
  currencyGrapheme,
  value,
  withFractionalPart,
  beforePrice,
  fractionalInSuper,
  boldIntegerPart,
}) => {
  const price = formatNumber(value);
  const integer = boldIntegerPart ? <b>{price[0]}</b> : price[0];
  const sign = currencyGrapheme && (
    <span className='grapheme'>
      {beforePrice ? `${currencyGrapheme}\u00A0` : `\u00A0${currencyGrapheme}`}
    </span>
  );
  return (
    <span className={classNames('price', className)}>
      {beforePrice && sign}
      {integer}
      {withFractionalPart && (
        fractionalInSuper ? <sup>{price[1]}</sup> : `.${price[1]}`
      )}
      {!beforePrice && sign}
    </span>
  );
};

Price.propTypes = {
  /**
   * Название класса
   */
  className: Type.string,
  /**
   * Графема валюты пользователя
   */
  currencyGrapheme: Type.string,
  /**
   * Цена
   */
  value: Type.number,
  /**
   * Указывать ли дробную часть
   */
  withFractionalPart: Type.bool,
  /**
   * Указывать знак валюты перед ценой
   */
  beforePrice: Type.bool,
  /**
   * Указывать дробную часть цены сверху (в <sup></sup>)
   */
  fractionalInSuper: Type.bool,
  /**
   * Выделять жирным шрифтом целую часть цены
   */
  boldIntegerPart: Type.bool,
};

export default Price;
