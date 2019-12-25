import classNames from 'classnames/bind';
import styles from './link.scss';

const cx = classNames.bind(styles);
export const LINK_COLORS = ['black', 'dark-blue', 'blue', 'red', 'gray', 'white', 'light-gray', 'dark-gray'];
export const LINK_UNDERLINE_TYPES = ['solid', 'dashed'];

/**
 * Создание стилей ссылки/псевдо-ссылки.
 * @param {Object} params Входные параметры.
 * @param {string} [params.className=''] Пользовательские классы.
 * @param {string} [params.color=''] Цвет текста.
 * @param {string} [params.underlineType=''] Подчеркивание.
 * @param {boolean} [params.disableHoverEffect=false] Не реагировать при наведении.
 * @return {string} Строка с классами для ссылки/псевдо-ссылки.
 */
export const createLinkStyle = ({ className = '', color = '', underlineType = '', disableHoverEffect = false }) => {
  const allowedColor = LINK_COLORS.includes(color) ? color : 'blue';
  const allowedUnderlineType = LINK_UNDERLINE_TYPES.includes(underlineType) ? underlineType : false;

  return cx(className, 'link', `link-${allowedColor}`, {
    'link-can-be-hovered': !disableHoverEffect,
    'link-underlined': allowedUnderlineType,
    [`link-underlined-${allowedUnderlineType}`]: allowedUnderlineType,
  });
};
