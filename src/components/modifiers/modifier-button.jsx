import React, { forwardRef } from 'react';
import isNumber from 'lodash/isNumber';
import classes from './modifiers.scss';
import classnames from 'classnames/bind';
import { MODIFIERS_TYPES } from '../constants';

const cx = classnames.bind(classes);

/**
 * Массив доступных типов содержимого модификатора.
 * @type {Array<string>}
 */
const availableTypes = Object.values(MODIFIERS_TYPES);

/**
 * Возвращает компонент модификатора.
 * @param {Object} props Свойства компонента.
 * @param {number|null} [props.count=null] Количество компонента.
 * @param {string} props.content Содержимое модификатора.
 * @param {'text'|'image'} [props.type='text'] Тип содержимого модификатора.
 * @param {boolean} [props.selected] Выбран ли модификатор.
 * @param {string} props.color Цвет модификатора.
 * @param {string} [props.className] Дополнительный CSS-класс.
 * @param {Function} [props.onClick] Сработает при клике на модификатор.
 * @param {boolean} [props.isMarkdown] Имеет ли товар уценку.
 * @return {ReactElement} Компонент модификатора.
 */
const ModifierButton = forwardRef(({
  count = null,
  content,
  selected,
  color,
  image,
  type = 'text',
  className = '',
  wrapperClassName = '',
  onClick,
  isMarkdown,
}, ref) => {
  const readyType = availableTypes.includes(type) ? type : 'text';

  return (
    <div
      ref={ref}
      className={cx(
        'modifier-button',
        wrapperClassName,
        { square: readyType !== MODIFIERS_TYPES.text }
      )}
      onClick={onClick}
      role={onClick ? 'button' : null}
    >
      {((isNumber(count) && count >= 0) || isMarkdown) && (
        <span
          className={cx(
            isNumber(count) && 'count',
            isMarkdown && 'markdown'
          )}
        >
          {isNumber(count) && count}
          {isMarkdown && (isNumber(count) ? '(У)' : 'У')}
        </span>
      )}
      <div
        className={cx('content',
          selected && 'selected',
          isMarkdown && 'markdown-content',
          className)}
        style={color ? { backgroundColor: color } : undefined}
        title={content}
      >
        {readyType === MODIFIERS_TYPES.text && (
          <span className={cx('text')}>
            {String(content || '')}
          </span>
        )}
        {readyType === MODIFIERS_TYPES.image && (
          <img alt={content} src={image} className={cx('image')} />
        )}
      </div>
    </div>
  );
});

ModifierButton.displayName = 'ModifierButton';
export default ModifierButton;
