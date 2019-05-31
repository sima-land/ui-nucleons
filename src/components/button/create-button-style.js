import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);
const BUTTON_COLORS = ['clean', 'white', 'blue'];
const BUTTON_SHAPES = ['square', 'rounded', 'pill', 'circle'];

/**
 * Создание классов для кнопки.
 * @param {Object} props Параметры функции.
 * @param {string} props.color Цвет.
 * @param {string} props.shape Форма.
 * @param {boolean} props.withShadow Тень.
 * @param {boolean} props.isFocused Фокус.
 * @param {string} props.className Пользовательские классы.
 * @return {string} Классы.
 */
const createButtonStyle = ({ color, shape, withShadow, isFocused, className }) => {
  color = BUTTON_COLORS.includes(color) ? color : 'clean';
  shape = BUTTON_SHAPES.includes(shape) ? shape : 'pill';

  return cx('button', className, `button-${shape}`, `button-${color}`, {
    'button-clean-focused': color === 'clean' && isFocused,
    'with-shadow': withShadow,
  });
};

export default createButtonStyle;
