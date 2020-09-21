import classnames from 'classnames/bind';

/**
 * Фабрика геттеров CSS-классов.
 * @param {Object} classes Классы из CSS-модуля.
 * @param {function (number): boolean} isValidKey Функция проверки ключа для класса.
 * @param {string} [prefix=''] Префикс имени класса.
 * @return {function (number): string | null} Геттер CSS-класса.
 */
export const ClassGetter = (classes, isValidKey, prefix = '') => {
  const cx = classnames.bind(classes);

  return value => isValidKey(value)
    ? cx(`${prefix}${value}`)
    : null;
};
