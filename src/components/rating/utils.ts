import classnames from 'classnames';
import { Classes } from './types';

/**
 * Объединяет пользовательские классы с обязательными.
 * @param base Обязательные классы.
 * @param customs Пользовательские классы.
 * @return Объект с объединенными классами.
 */
export const composeClasses = <B extends Record<string, string>, C extends Record<string, string>>(
  base: B,
  customs: C
): Record<keyof B & keyof C, string> => Object
  .keys({ ...base, ...customs })
  .reduce((result, key) => {
    result[key] = classnames(base[key], customs[key]);

    return result;
  }, {} as any);

/**
 * Функция для получения классов звезды.
 * @param params Параметры.
 * @param params.starIndex Значение текущей звезды.
 * @param params.value Значение рейтинга.
 * @param params.starsClasses Классы для звёзд.
 * @return Классы звезды.
 */
export const getStarClass = ({
  index,
  value,
  classes,
}: {
  index: number
  value: number
  classes: Classes
}): string => {
  let result = classnames(classes.star, classes.emptyStar);

  if (value >= index) {
    result = classnames(classes.star, classes.fullStar);
  } else if (
    Math.ceil(value) === index
    && Math.ceil(value) !== Math.floor(value)
  ) {
    result = classnames(classes.star, classes.halfStar);
  }

  return result;
};
