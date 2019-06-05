import classNames from 'classnames/bind';
import styles from './link.scss';

const cx = classNames.bind(styles);
export const LINK_COLORS = ['black', 'dark-blue', 'blue', 'red', 'gray', 'white'];
export const EXTERNAL_COLORS = ['blue', 'white', 'black'];
export const LINK_UNDERLINE_TYPES = ['solid', 'dashed'];

/**
 * Создание стилей ссылки/псевдо-ссылки.
 * @param {string} [className=''] Пользовательские классы.
 * @param {boolean} [disableHoverEffect=false] Не реагировать при наведении.
 * @return {string} Строка с классами для ссылки/псевдо-ссылки.
 */
export const createLinkStyle = ({ className = '', disableHoverEffect = false }) =>
  cx(className, {
    link: true,
    'link-can-be-hovered': !disableHoverEffect,
  });

/**
 * Создание стилей для текста внутри ссылки/псевдо-ссылки.
 * @param {string} [color=''] Цвет текста.
 * @param {string} [underlineType=''] Подчеркивание.
 * @param {boolean} [external=false] Является ли ссылкой на внешний ресурс.
 * @return {string} Строка с классами для текста внутри ссылки/псевдо-ссылки.
 */
export const createLinkTextStyle = ({ color = '', underlineType = '', external = false }) => {
  color = LINK_COLORS.includes(color) ? color : 'blue';
  underlineType = LINK_UNDERLINE_TYPES.includes(underlineType) ? underlineType : false;
  return cx('link-text', `link-${color}`, {
    'link-external': external,
    'link-underlined': underlineType,
    [`link-underlined-${underlineType}`]: underlineType,
  });
};

/**
 * Создание стилей для иконки внешного ресурса.
 * @param {string} [color] Цвет.
 * @return {string} Строка с классами для иконки внешнего ресурса.
 */
export const createExternalStyle = color => {
  const iconColor = color && EXTERNAL_COLORS.includes(color) ? color : 'blue';
  return cx('icon-external', `external-${iconColor}`);
};
