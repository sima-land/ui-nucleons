import React from 'react';
import { makeBoldSubstring } from '../helpers/make-bold-substring';
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
 * @param {boolean} [props.fractionalAtTop] Отображать дробную часть сверху.
 * @param {boolean} [props.boldIntegerPart] Отображать целую часть цены жирным начертанием.
 * @return {ReactElement} Цена товара с указанием знака валюты.
 */
const Price = ({
  className,
  currencySign,
  value,
  withFractionalPart,
  beforePrice,
  fractionalAtTop,
  boldIntegerPart,
}) => {
  const price = formatNumber(value, ' ');
  const integer = boldIntegerPart ? makeBoldSubstring(price[0], price[0]) : price[0];
  let priceView;
  if (withFractionalPart) {
    if (fractionalAtTop) {
      priceView = <span dangerouslySetInnerHTML={{ __html: `<span>${integer}<sup>${price[1]}</sup></span>` }} />;
    } else {
      priceView = <span>{`${integer}.${price[1]}`}</span>;
    }
  } else {
    priceView = <span>{`${integer}`}</span>;
  }
  const sign = currencySign
    ? (
      <span
        className={currencySign === 'RUB' ? 'sign' : null}
        dangerouslySetInnerHTML={{ __html: beforePrice ? `${currencySign}\u00A0` : `\u00A0${currencySign}` }}
      />
    )
    : null;
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
  fractionalAtTop: Type.bool,
  /**
   * Выделять жирным шрифтом целую часть цены
   */
  boldIntegerPart: Type.bool,
};

export default Price;
