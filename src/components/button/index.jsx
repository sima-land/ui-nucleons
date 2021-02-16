import React, { Fragment, forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './button.scss';
import PropTypes from 'prop-types';
import always from 'lodash/fp/always';
import cond from 'lodash/fp/cond';
import eq from 'lodash/fp/eq';
import T from 'lodash/stubTrue';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент кнопки.
 * @param {Object} props Свойства.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.className] CSS-класс.
 * @param {boolean} [props.disabled] Отключена ли кнопка.
 * @param {'primary'|'secondary'} [props.actionType='primary'] Определяет внешний вид кнопки.
 * @param {'button'|'container'|'link'} [props.appearance='button'] Определяет тип корневого элемента.
 * @param {'small'|'medium'} [props.size='medium'] Определяет размер.
 * @param {*} [props.icon] Иконка.
 * @param {'start'|'end'} [props.iconPosition='start'] Положение иконки.
 * @return {ReactElement} Компонент кнопки.
 */
const Button = forwardRef(function Button ({
  children,
  className,
  disabled,
  actionType = 'primary',
  appearance = 'button',
  size = 'medium',
  icon: Icon,
  iconPosition = 'start',
  ...restProps
}, ref) {
  const readyClassName = computeClassName({
    className,
    size,
    actionType,
    withIcon: Boolean(Icon),
    withContent: Boolean(children) && children !== 0,
    iconPosition,
  });
  const [Element, moreProps] = resolveAppearance(appearance);

  return (
    <Element
      {...restProps}
      {...moreProps}
      ref={ref}
      disabled={disabled}
      className={readyClassName}
      children={(
        <Fragment>
          {Icon && iconPosition === 'start' && (
            <Icon
              width={24}
              height={24}
              className={cx('icon', `icon-${children ? 'start' : ''}`)}
            />
          )}
          {children}
          {Icon && iconPosition === 'end' && (
            <Icon
              width={24}
              height={24}
              className={cx('icon', `icon-${children ? 'end' : ''}`)}
            />
          )}
        </Fragment>
      )}
    />
  );
});

/**
 * Возвращает строку с классами для стилизации кнопки.
 * @param {Object} props Опции.
 * @param {'primary'|'secondary'} [props.actionType='primary'] Определяет внешний вид кнопки.
 * @param {'small'|'medium'} [props.size='medium'] Определяет размер.
 * @param {'start'|'end'} [props.iconPosition='start'] Положение иконки.
 * @param {boolean} props.withIcon Показывать ли иконку.
 * @param {boolean} props.withContent Есть ли контент.
 * @param {string} [props.className] Дополнительный класс.
 * @return {string} Строка с классами.
 */
export const computeClassName = ({
  size = 'medium',
  actionType = 'primary',
  iconPosition = 'start',
  withIcon,
  withContent,
  className,
}) => cx([
  className,
  'button-base',
  actionType === 'secondary' ? 'button-secondary' : 'button-primary',
  size === 'small' && 'button-small',
  size === 'medium' && 'button-medium',
  withContent && !withIcon && `text-button-${size}`,
  withContent && withIcon && `button-${size}-with-${iconPosition}-icon`,
]);

/**
 * Возвращает кортеж с именем элемента и свойствами компонента по ключу.
 * @param {'button'|'link'|'container'} [appearance='button'] Ключ.
 * @return {[string, Object|null]} Кортеж с именем элемента и свойствами.
 */
export const resolveAppearance = cond([
  [eq('link'), always(['a', null])],
  [eq('container'), always(['div', { role: 'button' }])],
  [T, always(['button', null])],
]);

Button.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * CSS-класс.
   */
  className: PropTypes.string,

  /**
   * Отключена ли кнопка.
   */
  disabled: PropTypes.bool,

  /**
   * Определяет внешний вид кнопки.
   */
  actionType: PropTypes.oneOf(['primary', 'secondary']),

  /**
   * Определяет тип корневого элемента.
   */
  appearance: PropTypes.oneOf(['link', 'container', 'button']),

  /**
   * Определяет размер.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * Иконка.
   */
  icon: PropTypes.any,

  /**
   * Положение иконки.
   */
  iconPosition: PropTypes.oneOf(['start', 'end']),

};

export default Button;
