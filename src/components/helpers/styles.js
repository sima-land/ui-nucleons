import isNumber from 'lodash/isNumber';

/**
 * Возвращает строку значения CSS-свойства "transition".
 * @param {number} [duration=0] Длительность перехода в миллисекундах.
 * @param {string} [property='all'] Имя свойства.
 * @param {string} [easing='ease-out'] Функция плавности.
 * @return {string} Значение CSS-свойства "transition".
 */
export const getTransitionStyle = (
  duration = 0,
  property = 'all',
  easing = 'ease-out'
) => `${property} ${isNumber(duration) ? duration : 0}ms ${easing}`;

/**
 * Возвращает строку значения CSS-свойства с трансформацией смещения.
 *
 * Использовать только "translate3d" для смещения.
 * @see https://stackoverflow.com/a/22312917
 *
 * @param {number} [x=0] Смещение по оси x в пикселях.
 * @param {number} [y=0] Смещение по оси y в пикселях.
 * @param {number} [z=0] Смещение по оси z в пикселях.
 * @return {string} Значение CSS-свойства с трансформацией смещения.
 */
export const getTranslateStyle = (x = 0, y = 0, z = 0) => `translate3d(${x}px, ${y}px, ${z}px)`;
