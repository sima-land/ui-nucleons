import classnames from 'classnames/bind';

/**
 * Фабрика геттеров CSS-классов.
 * @param classes Классы из CSS-модуля.
 * @param isValidKey Функция проверки ключа для класса.
 * @param [prefix=''] Префикс имени класса.
 * @return Геттер CSS-класса.
 * @deprecated
 */
export const ClassGetter = <T = string | number>(
  classes: Record<string, string>,
  isValidKey: (s: T) => boolean,
  prefix = '',
) => {
  const cx = classnames.bind(classes);

  return (value: T) => (isValidKey(value) ? cx(`${prefix}${value}`) : undefined);
};
