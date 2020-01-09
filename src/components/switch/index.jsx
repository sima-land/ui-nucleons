import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import classnames from 'classnames/bind';
import classes from './switch.scss';

const cx = classnames.bind(classes);

const defaultClasses = Object.freeze({
  root: cx('root'),
  track: cx('track'),
  trackChecked: cx('track-checked'),
  circle: cx('circle'),
  circleChecked: cx('circle-checked'),
});

/**
 * Возвращает компонент стилизованного переключателя.
 * @param {Object} props Свойства.
 * @param {boolean} [props.defaultChecked=false] Отмечен ли переключатель по умолчанию.
 * @param {boolean} [props.checked=props.defaultChecked] Отмечен ли переключатель.
 * @param {Function} [props.onChange] Сработает при смене состояния.
 * @param {import('react').RefObject|Function} props.inputRef Ref внутреннего элемента input.
 * @param {Object} [props.inputProps] Свойства внутреннего элемента input.
 * @param {Object} [props.classes] CSS-классы.
 * @param {Function} [props.computeClasses] Получив CSS-классы по умолчанию, должна вернуть новые CSS-классы.
 * @return {ReactElement} Компонент стилизованного переключателя.
 */
const Switch = ({
  defaultChecked = false,
  checked = defaultChecked,
  onChange,
  inputRef,
  inputProps,
  classes: customClasses,
  computeClasses,
}) => {
  const [isChecked, toggleCheck] = useState(defaultChecked);
  const readyClasses = isFunction(computeClasses)
    ? computeClasses(defaultClasses)
    : { ...defaultClasses, ...customClasses };

  useEffect(() => toggleCheck(checked), [checked]);

  return (
    <span
      className={cx(
        'root-base',
        readyClasses.root,
        isChecked && readyClasses.rootChecked
      )}
    >
      <span
        className={cx(
          readyClasses.track,
          isChecked && readyClasses.trackChecked
        )}
      />
      <span
        className={cx(
          readyClasses.circle,
          isChecked && readyClasses.circleChecked
        )}
      />
      <input
        {...inputProps}
        ref={inputRef}
        checked={isChecked}
        type='checkbox'
        className={cx('input')}
        onChange={event => {
          toggleCheck(event.target.checked);
          isFunction(onChange) && onChange(event);
        }}
      />
    </span>
  );
};

Switch.propTypes = {
  /**
   * Отмечен ли переключатель по умолчанию.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Отмечен ли переключатель.
   */
  checked: PropTypes.bool,

  /**
   * Сработает при смене состояния.
   */
  onChange: PropTypes.func,

  /**
   * Ref внутреннего элемента input.
   */
  inputRef: PropTypes.oneOf(
    PropTypes.func,
    PropTypes.object
  ),

  /**
   * Свойства внутреннего элемента input.
   */
  inputProps: PropTypes.object,

  /**
   * CSS-классы.
   */
  classes: PropTypes.shape({
    root: PropTypes.string,
    track: PropTypes.string,
    trackChecked: PropTypes.string,
    circle: PropTypes.string,
    circleChecked: PropTypes.string,
  }),

  /**
   * Получив CSS-классы по умолчанию, должна вернуть новые CSS-классы.
   */
  computeClasses: PropTypes.func,
};

export default Switch;
