import React from 'react';
import { formatNumber } from '../helpers/format-number';
import Type from 'prop-types';
import styles from './price.scss';
import classNames from 'classnames';

/**
 * Цена товара с указанием знака валюты.
 * @param {Object} props Параметры компонента.
 * @param {string} [props.className] Класс/стили цены.
 * @param {string} [props.currencyGraphemeClass] Класс/стили графемы валюты.
 * @param {string} [props.fractionalClass] Класс/стили дробной части валюты.
 * @param {string} [props.currencyGrapheme] Графема валюты пользователя.
 * @param {number} props.value Цена.
 * @param {boolean|'auto'} [props.withFractionalPart='auto'] Указать дробную часть.
 * @param {boolean} [props.graphemeBeforePrice] Отобразить знак валюты перед ценой.
 * @param {boolean} [props.fractionalInSuper] Отображать дробную часть сверху.
 * @param {boolean} [props.boldIntegerPart] Отображать целую часть цены жирным начертанием.
 * @param {boolean} [props.old] Отображать цену "старой" - серой и зачеркнутой.
 * @return {ReactElement} Цена товара с указанием знака валюты.
 */
const Price = ({
  className,
  currencyGrapheme,
  value,
  withFractionalPart = 'auto',
  graphemeBeforePrice,
  fractionalInSuper,
  boldIntegerPart,
  currencyGraphemeClass,
  fractionalClass,
  old,
}) => {
  const price = formatNumber(value);
  const integer = boldIntegerPart ? <b>{price[0]}</b> : price[0];
  const fractionalPart = price[1];
  const sign = currencyGrapheme && (
    <span className={classNames(styles.grapheme, currencyGraphemeClass)}>
      {graphemeBeforePrice ? `${currencyGrapheme}\u00A0` : `\u00A0${currencyGrapheme}`}
    </span>
  );
  return (
    <span className={classNames(styles.price, className, old && styles['old-price'])}>
      {graphemeBeforePrice && sign}
      {integer}
      {((withFractionalPart === true) || (withFractionalPart === 'auto' && fractionalPart > 0)) && (
        fractionalInSuper ? <sup className={fractionalClass}>{fractionalPart}</sup> : `.${fractionalPart}`
      )}
      {!graphemeBeforePrice && sign}
    </span>
  );
};

Price.propTypes = {
  /**
   * Класс/стили цены знака валюты.
   */
  currencyGraphemeClass: Type.string,
  /**
   * Класс/стили цены дробной части.
   */
  fractionalClass: Type.string,
  /**
   * Класс/стили цены валюты.
   */
  className: Type.string,
  /**
   * Графема валюты пользователя.
   */
  currencyGrapheme: Type.string,
  /**
   * Цена
   */
  value: Type.number,
  /**
   * Указывать ли дробную часть
   */
  withFractionalPart: Type.oneOf([true, false, 'auto']),
  /**
   * Указывать знак валюты перед ценой.
   */
  graphemeBeforePrice: Type.bool,
  /**
   * Указывать дробную часть цены сверху (в <sup></sup>).
   */
  fractionalInSuper: Type.bool,
  /**
   * Выделять жирным шрифтом целую часть цены.
   */
  boldIntegerPart: Type.bool,
  /**
   * Отображать цену "старой" - серой и зачеркнутой.
   */
  old: Type.bool,
};

export default Price;
