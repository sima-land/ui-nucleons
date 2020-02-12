import React, { Fragment } from 'react';
import { formatNumber } from '../helpers/format-number';
import PropTypes from 'prop-types';
import classes from './price.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

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
 * @param {string} [props.fractionalSign='.'] Знак отделения копеек от цены.
 * @param {boolean} [props.boldIntegerPart] Отображать целую часть цены жирным начертанием.
 * @param {boolean} [props.old] Отображать цену "старой" - серой и зачеркнутой.
 * @return {ReactElement} Цена товара с указанием знака валюты.
 */
const Price = ({
  className,
  currencyGrapheme,
  value,
  withFractionalPart: withFraction = 'auto',
  graphemeBeforePrice,
  fractionalInSuper,
  fractionalSign = '.',
  boldIntegerPart,
  currencyGraphemeClass,
  fractionalClass,
  old,
}) => {
  const [integer, fraction] = formatNumber(value);
  const needFraction = withFraction === true || (withFraction === 'auto' && fraction > 0);

  const integerView = boldIntegerPart
    ? <b>{integer}</b>
    : integer;

  const sign = Boolean(currencyGrapheme) && (
    <span className={currencyGraphemeClass}>
      {
        graphemeBeforePrice
          ? `${currencyGrapheme}\u00A0`
          : `\u00A0${currencyGrapheme}`
      }
    </span>
  );

  return (
    <span className={cx('price', className, old && 'old-price')}>
      {graphemeBeforePrice && sign}
      {integerView}
      {needFraction && (
        fractionalInSuper
          ? (
            <Fragment>
              <span className={cx('invisible-dot')}>.</span>
              <sup className={fractionalClass}>
                {fraction}
              </sup>
            </Fragment>
          )
          : `${fractionalSign}${fraction}`
      )}
      {!graphemeBeforePrice && sign}
    </span>
  );
};

Price.propTypes = {
  /**
   * Класс/стили цены знака валюты.
   */
  currencyGraphemeClass: PropTypes.string,

  /**
   * Класс/стили цены дробной части.
   */
  fractionalClass: PropTypes.string,

  /**
   * Класс/стили цены валюты.
   */
  className: PropTypes.string,

  /**
   * Графема валюты пользователя.
   */
  currencyGrapheme: PropTypes.string,

  /**
   * Цена.
   */
  value: PropTypes.number,

  /**
   * Указывать ли дробную часть.
   */
  withFractionalPart: PropTypes.oneOf([true, false, 'auto']),

  /**
   * Указывать знак валюты перед ценой.
   */
  graphemeBeforePrice: PropTypes.bool,

  /**
   * Указывать дробную часть цены сверху (в <sup></sup>).
   */
  fractionalInSuper: PropTypes.bool,

  /**
   * Знак отделения копеек от цены.
   */
  fractionalSign: PropTypes.string,

  /**
   * Выделять жирным шрифтом целую часть цены.
   */
  boldIntegerPart: PropTypes.bool,

  /**
   * Отображать цену "старой" - серой и зачеркнутой.
   */
  old: PropTypes.bool,
};

export default Price;
