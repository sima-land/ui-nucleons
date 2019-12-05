import classNames from 'classnames/bind';
import styles from './link.scss';

const cx = classNames.bind(styles);
export const LINK_COLORS = ['black', 'dark-blue', 'blue', 'red', 'gray', 'white', 'light-gray'];
export const EXTERNAL_COLORS = ['blue', 'white', 'black'];
export const LINK_UNDERLINE_TYPES = ['solid', 'dashed'];

/**
 * Создание стилей ссылки/псевдо-ссылки.
 * @param {Object} params Входные параметры.
 * @param {string} [params.className=''] Пользовательские классы.
 * @param {boolean} [params.disableHoverEffect=false] Не реагировать при наведении.
 * @return {string} Строка с классами для ссылки/псевдо-ссылки.
 */
export const createLinkStyle = ({ className = '', disableHoverEffect = false }) =>
  cx(className, {
    link: true,
    'link-can-be-hovered': !disableHoverEffect,
  });

/**
 * Создание стилей для текста внутри ссылки/псевдо-ссылки.
 * @param {Object} params Входные параметры.
 * @param {string} [params.color=''] Цвет текста.
 * @param {string} [params.underlineType=''] Подчеркивание.
 * @param {boolean} [params.external=false] Является ли ссылкой на внешний ресурс.
 * @return {string} Строка с классами для текста внутри ссылки/псевдо-ссылки.
 */
export const createLinkTextStyle = ({ color = '', underlineType = '', external = false }) => {
  const allowedColor = LINK_COLORS.includes(color) ? color : 'blue';
  const allowedUnderlineType = LINK_UNDERLINE_TYPES.includes(underlineType) ? underlineType : false;
  return cx('link-text', `link-${allowedColor}`, {
    'link-external': external,
    'link-underlined': allowedUnderlineType,
    [`link-underlined-${allowedUnderlineType}`]: allowedUnderlineType,
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
