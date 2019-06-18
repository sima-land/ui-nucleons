import classNames from 'classnames/bind';
import styles from './popup-arrow.scss';

const bindClassNames = classNames.bind(styles);

/**
 * Формирование стилей стрелки.
 * @param {Object} props Свойства компонента.
 * @param {'top'|'bottom'} [props.direction] Направление стрелки.
 * @param {string} [props.className] Дополнительный класс.
 * @param {boolean} [props.shadow] Отображать тень.
 * @param {'white' | 'blue' | 'dark-blue' | 'deep-blue' } [props.color] Цвет.
 * @return {Object} Стили стрелки.
 */
export const createArrowStyles = ({ direction, className, shadow, color } = {}) => {
  const COLORS = ['white', 'blue', 'dark-blue', 'deep-blue'];
  const DIRECTION = ['top', 'bottom'];
  const col = COLORS.includes(color) ? color : 'white';
  const direct = DIRECTION.includes(direction) ? direction : 'top';
  return bindClassNames(
    'base',
    [col],
    className,
    [direct],
    shadow && classNames('shadow', `shadow-${direct}`)
  );
};
