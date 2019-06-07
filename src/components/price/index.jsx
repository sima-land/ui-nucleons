import React from 'react';
import { formatNumber } from '../helpers/format-number';
import Type from 'prop-types';
import './price.scss';
import classnames from 'classnames';

/**
 * Цена товара с указанием знака валюты.
 * @param {Object} props Параметры компонента.
 * @param {string} [props.className] Название класса.
 * @param {string} [props.currencySign] Валюта пользователя.
 * @param {number} props.value Цена.
 * @param {boolean} [props.withFractionalPart] Указать дробную часть.
 * @param {boolean} [props.beforePrice] Отобразить знак валюты перед ценой.
 * @param {boolean} [props.fractionalInSuper] Отображать дробную часть сверху.
 * @param {boolean} [props.boldIntegerPart] Отображать целую часть цены жирным начертанием.
 * @return {ReactElement} Цена товара с указанием знака валюты.
 */
const Price = ({
  className,
  currencySign,
  value,
  withFractionalPart,
  beforePrice,
  fractionalInSuper,
  boldIntegerPart,
}) => {
  const price = formatNumber(value, ' ');
  const integer = boldIntegerPart ? <b>{price[0]}</b> : price[0];
  let priceView;
  if (withFractionalPart) {
    priceView
      = fractionalInSuper
        ? <span>{integer}<sup>{price[1]}</sup></span>
        : <span>{integer}.{price[1]}</span>;
  } else {
    priceView = <span>{integer}</span>;
  }
  const sign = currencySign && (
    <span className={currencySign === 'RUB' ? 'sign' : null}>
      {beforePrice ? `${currencySign}\u00A0` : `\u00A0${currencySign}`}
    </span>
  );
  const priceClass = classnames('price', className);
  return (
    <span className={priceClass}>
      {beforePrice && sign}
      {priceView}
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
   * Валюта пользователя
   */
  currencySign: Type.string,
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
