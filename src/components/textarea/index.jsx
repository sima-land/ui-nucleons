import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import isFunction from 'lodash/isFunction';
import classnames from 'classnames/bind';
import fieldClasses from '../input/fields.scss';
import textareaClasses from './textarea.scss';
import PropTypes from 'prop-types';
import { fitElementHeight } from '../helpers/fit-element-height';

const cx = classnames.bind(textareaClasses);

/**
 * Возвращает компонент текстовой области.
 * @param {Object} props Свойства компонента.
 * @param {*} [props.label] Содержимое ярлыка.
 * @param {boolean} [props.failed] Нужно ли показывать поле как ошибочно заполненное.
 * @param {boolean} [props.resizeable=true] Можно ли изменять размер поля.
 * @param {boolean} [props.fullWidth] Нужно ли растягивать поле на всю ширину родителя.
 * @param {boolean} [props.autoFocus] Нужно ли фокусироваться на поле сразу после монтирования.
 * @param {boolean} [props.autoFitHeight] Нужно ли автоматически подгонять высоту под содержимое.
 * @param {Function} [props.onBlur] Сработает при фокусировке на поле.
 * @param {Function} [props.onFocus] Сработает при расфокусировке на поле.
 * @return {ReactElement} Компонент текстовой области.
 */
const Textarea = forwardRef(function Textarea ({
  value,
  failed,
  className,
  resizeable = true,
  fullWidth,
  autoFocus,
  autoFitHeight,
  onInput,
  onFocus,
  onBlur,
  ...restProps
}, ref) {
  const [focused, setFocused] = useState(autoFocus);
  const textareaRef = useRef();

  useImperativeHandle(ref, () => textareaRef.current);

  useEffect(() => {
    autoFitHeight && fitElementHeight({ target: textareaRef.current });
  }, [textareaRef.current]);

  return (
    <textarea
      {...restProps}
      ref={textareaRef}
      className={cx(
        'textarea',
        fieldClasses.field,
        failed && fieldClasses.failed,
        focused && fieldClasses.focused,
        resizeable && 'resizeable',
        fullWidth && 'full-width',
        autoFitHeight && 'auto-fit-height',
        className
      )}
      onFocus={event => {
        setFocused(true);
        isFunction(onFocus) && onFocus(event);
      }}
      onBlur={event => {
        setFocused(false);
        isFunction(onBlur) && onBlur(event);
      }}
      onInput={event => {
        autoFitHeight && fitElementHeight(event);
        isFunction(onInput) && onInput(event);
      }}
      value={value}
    />
  );
});

Textarea.propTypes = {
  /**
   * Значение поля.
   */
  value: PropTypes.string,

  /**
   * Нужно ли отображать поле как ошибочно заполненное.
   */
  failed: PropTypes.bool,

  /**
   * CSS-класс.
   */
  className: PropTypes.string,

  /**
   * Нужно ли давать возможность изменить размер поля.
   */
  resizeable: PropTypes.bool,

  /**
   * Нужно ли растягивать поле на всю ширину родителя.
   */
  fullWidth: PropTypes.bool,

  /**
   * Нужно ли подстраивать размер поля под введенный текст.
   */
  autoFitHeight: PropTypes.bool,

  /**
   * Обработчик события "input".
   */
  onInput: PropTypes.func,

  /**
   * Нужно ли фокусироваться на поле сразу после монтирования.
   */
  autoFocus: PropTypes.bool,

  /**
   * Сработает при фокусировке на поле.
   */
  onFocus: PropTypes.func,

  /**
   * Сработает при расфокусировке на поле.
   */
  onBlur: PropTypes.func,
};

Textarea.displayName = 'Textarea';

export default Textarea;
