import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);
const BUTTON_COLORS = ['clean', 'white', 'blue'];
const BUTTON_SHAPES = ['square', 'rounded', 'pill', 'circle'];

/**
 * Создание классов для кнопки
 * @param {string} color Цвет
 * @param {string} shape Форма
 * @param {boolean} withShadow Тень
 * @param {boolean} isFocused Фокус
 * @param {string} className Пользовательские классы
 * @return {string} Классы
 */
const createButtonStyle = ({ color, shape, withShadow, isFocused, className }) => {
  color = BUTTON_COLORS.includes(color) ? color : 'clean';
  shape = BUTTON_SHAPES.includes(shape) ? shape : 'pill';

  return cx('button', className, `button_${shape}`, `button_${color}`, {
    button_clean_focused: color === 'clean' && isFocused,
    withShadow,
  });
};

export default createButtonStyle;
