import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);
export const BUTTON_COLORS = ['clean', 'white', 'blue'];
export const BUTTON_SHAPES = ['square', 'rounded', 'pill', 'circle'];

/**
 * Создание классов для кнопки.
 * @param {Object} props Параметры функции.
 * @param {string} [props.className] Пользовательские классы.
 * @param {string} [props.color='clean'] Цвет.
 * @param {string} [props.shape='pill'] Форма.
 * @param {boolean} [props.withShadow=false] Тень.
 * @param {boolean} [props.isFocused=false] Фокус.
 * @return {string} Классы.
 */
export const createButtonStyle = ({
  className,
  color = 'clean',
  shape = 'pill',
  withShadow = false,
  isFocused = false,
}) => {
  const allowedColor = BUTTON_COLORS.includes(color) ? color : 'clean';
  const allowedShape = BUTTON_SHAPES.includes(shape) ? shape : 'pill';

  return cx('button', className, `button-${allowedShape}`, `button-${allowedColor}`, {
    'button-clean-focused': allowedColor === 'clean' && isFocused,
    'with-shadow': withShadow,
  });
};
