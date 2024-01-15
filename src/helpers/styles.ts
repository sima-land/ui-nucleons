/**
 * Возвращает строку значения CSS-свойства "transition".
 * @param duration Длительность перехода в миллисекундах.
 * @param property Имя свойства.
 * @param easing Функция плавности.
 * @return Значение CSS-свойства "transition".
 * @todo Перенести в carousel/utils.
 */
export function getTransitionStyle(duration = 0, property = 'all', easing = 'ease-out'): string {
  return `${property} ${Number.isFinite(duration) ? duration : 0}ms ${easing}`;
}

/**
 * Возвращает строку значения CSS-свойства с трансформацией смещения.
 *
 * Использовать только "translate3d" для смещения.
 * @see https://stackoverflow.com/a/22312917
 * @param x Смещение по оси x в пикселях.
 * @param y Смещение по оси y в пикселях.
 * @param z Смещение по оси z в пикселях.
 * @return Значение CSS-свойства с трансформацией смещения.
 * @todo Перенести в carousel/utils.
 */
export function getTranslateStyle(x = 0, y = 0, z = 0): string {
  return `translate3d(${x}px, ${y}px, ${z}px)`;
}
