import React from 'react';
import Type from 'prop-types';
import classes from './modifier-item.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES } from '../../constants';
import Price from '../../price';
import Text from '../../text';
import Icon from '../../icon';
import checkMark from '../../icons/check-mark.svg';

export const cx = classnames.bind(classes);

/**
 * Компонент модификатора в списке.
 * @param {Object} props Свойства компонента.
 * @param {string} props.name Наименование модификатора.
 * @param {boolean} [props.selected] Выбран ли модификатор.
 * @param {'text'|'image'|'color'} [props.type='text'] Тип модификатора.
 * @param {string} [props.color] Цвет модификатора.
 * @param {string} [props.image] URL изображения модификатора.
 * @param {number} props.price Цена товара-модификатора.
 * @param {string} props.currencyGrapheme Графема валюты пользователя.
 * @param {string} [props.additionalText] Дополнительный текст.
 * @param {Function} props.onClick Обработчик клика на модификатор.
 * @return {ReactElement} Компонент модификатора.
 */
const ModifierItem = ({
  name,
  selected,
  type = 'text',
  color,
  image,
  price,
  currencyGrapheme,
  additionalText,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cx('wrapper', selected && 'selected')}
  >
    {Boolean(type === MODIFIERS_TYPES.image && image) && (
      <img
        className={cx('adornment')}
        src={image}
        alt={name}
      />
    )}
    {Boolean(type === MODIFIERS_TYPES.color && color) && (
      <div
        className={cx('adornment', 'color')}
        style={{ backgroundColor: color }}
      />
    )}
    <div className={cx('info')}>
      <span className={cx('name')}>{name}</span>
      {Boolean(price) && (
        <Price
          value={price}
          currencyGrapheme={currencyGrapheme}
          className={cx('price', additionalText && 'additional')}
          fractionalSign=','
        />
      )}
      {Boolean(additionalText) && (
        <Text
          color='gray38'
          children={additionalText}
          size={12}
          lineHeight={16}
        />
      )}
    </div>
    <div className={cx('icon-wrapper')}>
      {selected && (
        <div className={cx('icon')}>
          <Icon
            icon={checkMark}
            color='white'
            role='presentation'
            size={24}
          />
        </div>
      )}
    </div>
  </div>
);

ModifierItem.propTypes = {

  /**
   * Наименование модификатора.
   */
  name: Type.string,

  /**
   * Выбран ли модификатор.
   */
  selected: Type.bool,

  /**
   * Тип модификатора.
   */
  type: Type.oneOf(['text', 'image', 'color']),

  /**
   * Цвет модификатора.
   */
  color: Type.string,

  /**
   * URL изображения модификатора.
   */
  image: Type.string,

  /**
   * Цена товара-модификатора.
   */
  price: Type.number,

  /**
   * Графема валюты пользователя.
   */
  currencyGrapheme: Type.string,

  /**
   * Дополнительный текст.
   */
  additionalText: Type.string,

  /**
   * Обработчик клика на модификатор.
   */
  onClick: Type.func,
};

export default ModifierItem;
