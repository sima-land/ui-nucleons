import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import TextField from '../text-field';
import { InputMask } from '@krutoo/input-mask/dist/dom';
import PropTypes from 'prop-types';

const maskCommons = { placeholder: '_', pattern: /\d/ };

/**
 * Компонент текстового поля (TextField) с маской.
 * @param {Object} props Свойства.
 * @param {string} props.mask Маска.
 * @param {string} [props.value] Значение.
 * @param {Function} props.onBlur Сработает при событии blur.
 * @return {ReactElement} Компонент.
 */
export const MaskedField = forwardRef(function MaskedField ({
  mask,
  value = '',
  onBlur,
  ...restOptions
}, ref) {
  const [inputMask, setInputMask] = useState();
  const [inputState, setInputState] = useState({ value, cleanValue: '' });
  const innerRef = useRef();

  useImperativeHandle(ref, () => innerRef.current);

  useEffect(() => {
    const im = InputMask(innerRef.current, {
      ...maskCommons,
      mask,
      onChange: setInputState,
    });

    im.setValue(value);
    setInputMask(im);

    return () => im.disable();
  }, [mask]);

  useEffect(() => {
    inputMask && inputMask.setValue(value);
  }, [value, inputMask]);

  return (
    <TextField
      {...restOptions}
      ref={innerRef}
      restPlaceholder={{
        value: mask.slice(inputState.value.length),
        shiftValue: inputState.value,
      }}

      // получаем данные маски только по событию "blur"
      onBlur={e => onBlur && onBlur(e, inputState)}
    />
  );
});

MaskedField.propTypes = {
  /**
   * Маска.
   */
  mask: PropTypes.string.isRequired,

  /**
   * Значение.
   */
  value: PropTypes.string,

  /**
   * Сработает при событии blur.
   */
  onBlur: PropTypes.func,
};
